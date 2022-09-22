<script setup>
import { computed, onMounted, watch } from "@vue/runtime-core";
import { saveExcel } from "@progress/kendo-vue-excel-export";
import ServiceTableApi from "../api/ServiceTableApi";
import RequestLoading from "./RequestLoading.vue";
import { useToast } from "vue-toastification";
import { reactive } from "@vue/reactivity";
import StateModal from "./StateModal.vue";
import { useRoute } from "vue-router";
import LogModal from "./LogModal.vue";

/////////////////////////////////////////////////
const toast = useToast();
const route = useRoute();
const state = reactive({
  requestLaoding: false,
  stateStatusText: "نامشخص",
  tableList: {
    status: 200,
    meta_data: {
      current_page: 1,
      page_size: 20,
      total: 0,
    },
    data: [
      {
        Id: 10280,
        Serviceid: 4,
        Servicemethodid: 1022,
        Servicemethodname: "فردی  تغییرات خواهران",
        ServiceName: "خواهران",
        TypeRun: 0,
        SleepRun: 0,
        Name: "اجرای تغییرات خواهران - 26 تیرماه 1401",
        Input: "1401/03/29,1401/04/26",
        state: 3,
        DateRun: "2022-07-17T13:43:29.49",
        IsActive: true,
        CreatedDate: "2022-07-17T13:43:33.893",
        ModifiedDate: "2022-07-19T12:33:57.82",
        CreatedBy: 1199,
        ModifiedBy: 1199,
      },
      {
        Id: 10178,
        Serviceid: 4,
        Servicemethodid: 1022,
        Servicemethodname: "فردی  تغییرات خواهران",
        ServiceName: "خواهران",
        TypeRun: 0,
        SleepRun: 0,
        Name: "تغییرات خواهران - 28 خردادماه 1401",
        Input: "1401/02/26,1401/03/28",
        state: 3,
        DateRun: "2022-06-18T13:11:58.413",
        IsActive: true,
        CreatedDate: "2022-06-18T13:12:02.877",
        ModifiedDate: "2022-06-22T13:24:13.833",
        CreatedBy: 1199,
        ModifiedBy: 1199,
      },
    ],
  },
  serviceMethodId: "",
  serviceId: "",
  currentPage: 1,
  inputTableList: [
    { name: "کد", value: "", input: "Id" },
    { name: "نام", value: "", input: "Name" },
    { name: "نام سرویس", value: "", input: "ServiceName" },
    { name: "نام متد", value: "", input: "Servicemethodname" },
    { name: "وضعیت عملیات", value: "", input: "state" },
  ],
});
// ////////////////////////////
// HandelRequsetForTabelService
const getTabel = (serviceMethodId, pageNumber) => {
  state.requestLaoding = true;
  // state.tableList.data = [];
  // state.tableList.meta_data = { current_page: 1, page_size: 20, total: 0 };

  ServiceTableApi.getList(serviceMethodId, pageNumber)
    .then((response) => {
      console.log(response);
      state.tableList.data = response && response.data;
      state.tableList.meta_data = response && response.data.meta_data;
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("در بارگذاری اطلاعات خطایی رخ داده است", {
        timeout: 5000,
      });
    })
    .finally(() => (state.requestLaoding = false));
};
onMounted(() => {
  state.serviceMethodId = route.meta.requestServicemethodid;
  state.serviceId = route.meta.serviceid;
  state.currentPage = 1;
  getTabel(state.serviceMethodId, state.currentPage);
});

watch(route, () => {
  if (route.meta.requestServicemethodid) {
    state.serviceMethodId = route.meta.requestServicemethodid;
    state.serviceId = route.meta.serviceid;
    state.currentPage = 1;
    getTabel(state.serviceMethodId, state.currentPage);
  }
});
// FinishRequsetForTabelService;
// /////////////////////////////
const handelPrevPagination = () => {
  if (state.currentPage > 1) {
    state.currentPage--;
  }
};
const pageCount = computed(() => {
  return Math.ceil(
    state.tableList.meta_data.total / state.tableList.meta_data.page_size
  );
});
const handelFindPage = (pageNumber) => {
  state.currentPage = pageNumber; // Number(pageNumber); //event.target.innerHTML);
  getTabel(state.serviceMethodId, state.currentPage);
};
const handelFilterInput = (input, value) => {
  console.log(input, value);
};
const exportExcel = () => {
  saveExcel({
    data: state.tableList.data,
    fileName: "TableService",
    columns: [
      { field: "Id", title: "کد" },
      { field: "Name", title: "نام" },
      { field: "ServiceName", title: "نام سرویس" },
      { field: "Servicemethodname", title: "نام متد" },
    ],
    dir: "rtl",
  });
};
const handelState = (id) => {
  state.requestLaoding = true;
  ServiceTableApi.getState(id)
    .then((response) => {
      console.log(response);
      switch (response.data) {
        case 1:
          state.stateStatusText = "درحال اجرا";
          break;
        case 3:
          state.stateStatusText = "پایان یافته";
          break;
        case 5:
          state.stateStatusText = "درخواست خاتمه یافت توسط کاربر";
          break;
        default:
          state.stateStatusText = "نامشخص";
      }
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("وضعیت دریافت نشد", {
        timeout: 2000,
      });
    })
    .finally(() => (state.requestLaoding = false));
};
const handelLog = (id) => {
  state.requestLaoding = true;
  ServiceTableApi.getState(id)
    .then((response) => {
      console.log(response);
      switch (response.data) {
        case 1:
          state.stateStatusText = "درحال اجرا";
          break;
        case 3:
          state.stateStatusText = "پایان یافته";
          break;
        case 5:
          state.stateStatusText = "درخواست خاتمه یافت توسط کاربر";
          break;
        default:
          state.stateStatusText = "نامشخص";
      }
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("وضعیت دریافت نشد", {
        timeout: 2000,
      });
    })
    .finally(() => (state.requestLaoding = false));
};
</script>
<template>
  <div class="ParentTabel">
    <Teleport to="body">
      <RequestLoading v-if="state.requestLaoding" />
    </Teleport>
    <table class="Table">
      <thead>
        <tr id="FirstTr">
          <th class="p-2">
            <button class="ExcelBtn" @click="exportExcel">
              <font-awesome-icon icon="fa-solid fa-print" />
            </button>
          </th>
          <th
            v-for="(items, index) in state.inputTableList"
            class="font-medium p-1"
            :key="index"
            scope="col"
          >
            <input
              @input="handelFilterInput(items.input, items.value)"
              :placeholder="items.name"
              v-model="items.value"
              class="InputTabel"
              type="text"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(items, index) in state.tableList.data"
          v-show="state.tableList.data && state.tableList.data.length"
          :key="index"
        >
          <td>
            {{ index + 1 }}
          </td>
          <td>
            {{ items.Id }}
          </td>
          <td>
            {{ items.Name }}
          </td>
          <td>
            {{ items.ServiceName }}
          </td>
          <td>
            {{ items.Servicemethodname }}
          </td>
          <td>
            <font-awesome-icon
              class="text-green-600 cursor-pointer"
              data-bs-target="#exampleModalCenter"
              @click="handelState(items.Id)"
              icon="fa-solid fa-message"
              data-bs-toggle="modal"
              size="xl"
            />
            <font-awesome-icon
              data-bs-target="#exampleModalCenteredScrollable"
              class="text-red-600 mr-4 cursor-pointer"
              icon="fa-solid fa-chart-simple"
              @click="handelLog(items.Id)"
              data-bs-toggle="modal"
              size="xl"
            />
          </td>
        </tr>
        <p v-show="state.tableList.status !== 200">اطلاعات دریافت نشد</p>
      </tbody>
    </table>
    <!-- ////////////////////////////////////////// -->
    <div class="TablePagination">
      <ul class="UlPagination">
        <li v-show="state.currentPage > 1" @click="handelPrevPagination">
          <a class="BtnNextOrPrevPagination">
            <font-awesome-icon icon=" fa-solid fa-circle-arrow-left" />
          </a>
        </li>
        <!-- /////////////////////////////////////////////////// -->
        <li v-if="state.currentPage - 2 > 0">
          <a
            @click="handelFindPage(state.currentPage - 2)"
            class="PagePagination"
          >
            {{ state.currentPage - 2 }}
          </a>
        </li>
        <li v-if="state.currentPage - 1 > 0">
          <a
            @click="handelFindPage(state.currentPage - 1)"
            class="PagePagination"
          >
            {{ state.currentPage - 1 }}
          </a>
        </li>
        <li>
          <a class="PagePagination scale-110 bg-white text-black border-2">
            {{ state.currentPage }}
          </a>
        </li>
        <li>
          <a
            v-show="state.currentPage + 1 <= pageCount"
            @click="handelFindPage(state.currentPage + 1)"
            class="PagePagination"
          >
            {{ state.currentPage + 1 }}
          </a>
        </li>
        <li>
          <a
            v-show="state.currentPage + 2 <= pageCount"
            @click="handelFindPage(state.currentPage + 2)"
            class="PagePagination"
          >
            {{ state.currentPage + 2 }}
          </a>
        </li>
        <!-- ////////////////////////////////////////////////////////// -->
        <li
          v-show="state.currentPage + 2 < pageCount"
          @click="state.currentPage++"
        >
          <a class="BtnNextOrPrevPagination">
            <font-awesome-icon icon=" fa-solid fa-circle-arrow-right" />
          </a>
        </li>
      </ul>
    </div>
    <!-- ////////////////////////////////////////// -->
    <StateModal :state="state.stateStatusText" />
    <LogModal />
  </div>
</template>