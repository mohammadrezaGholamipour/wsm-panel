<script setup>
import { computed, onMounted, watch } from "@vue/runtime-core";
import { saveExcel } from "@progress/kendo-vue-excel-export";
import ServiceTableApi from "../api/ServiceTableApi";
import RequestLoading from "./RequestLoading.vue";
import { useToast } from "vue-toastification";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
/////////////////////////////////////////////////
const toast = useToast();
const route = useRoute();
const state = reactive({
  requestLaoding: false,
  tableList: {
    status: 200,
    meta_data: {
      current_page: 1,
      page_size: 20,
      total: 0,
    },
    data: [],
  },
  serviceMethodId: "",
  serviceId: "",
  currentPage: 1,
  inputTableList: [
    { name: "کد", value: "", input: "Id" },
    { name: "نام", value: "", input: "Name" },
    { name: "نام سرویس", value: "", input: "ServiceName" },
    { name: "نام متد", value: "", input: "Servicemethodname" },
  ],
});
// ////////////////////////////
// HandelRequsetForTabelService
const getTabel = (serviceMethodId, pageNumber) => {
  state.requestLaoding = true;
  state.tableList.data = [];
  state.tableList.meta_data = { current_page: 1, page_size: 20, total: 0 };

  ServiceTableApi.getList(serviceMethodId, pageNumber)
    .then((response) => {
      console.log(response);
      state.tableList.data = response && response.data;
      state.tableList.meta_data = response && response.meta_data;
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
  </div>
</template>
