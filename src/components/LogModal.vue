<script setup>
import { saveExcel } from "@progress/kendo-vue-excel-export";
import { reactive } from "@vue/reactivity";
// ///////////////////////////////////////
const state = reactive({
  requestLaoding: false,
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
  currentPage: 1,
  headerLogTabel: [
    { field: "ServiceID", title: "شناسه نوع سرویس" },
    { field: "Text", title: "متن" },
    { field: "TypelogTitle", title: "نوع لاگ" },
    { field: "Code", title: "کد" },
    { nfieldame: "EntityCode", title: "شناسه رکورد" },
    { nfieldame: "CreateDate", title: "تاریخ لاگ" },
  ],
});
const exportExcel = () => {
  saveExcel({
    data: state.tableList.data,
    fileName: "TableService",
    columns: [
      { field: "ServiceID", title: "شناسه نوع سرویس" },
      { field: "Text", title: "متن" },
      { field: "TypelogTitle", title: "نوع لاگ" },
      { field: "Code", title: "کد" },
      { field: "EntityCode", title: "شناسه رکورد" },
      { field: "CreateDate", title: "تاریخ لاگ" },
    ],
    dir: "rtl",
  });
};
</script>
<template>
  <div
    aria-labelledby="exampleModalCenteredScrollable"
    class="LogModalParent hidden fade modal"
    id="exampleModalCenteredScrollable"
    aria-modal="true"
    role="dialog"
  >
    <div class="LogModalDivOne modal-dialog">
      <div class="LogModalDivTow">
        <div class="LogModalBody">
          <!-- statrTabel -->
          <div class="ParentTabel">
            <table class="Table">
              <thead>
                <tr id="FirstTr">
                  <th class="p-2">
                    <button class="ExcelBtn" @click="exportExcel">
                      <font-awesome-icon icon="fa-solid fa-print" />
                    </button>
                  </th>
                  <th
                    v-for="(items, index) in state.headerLogTabel"
                    class="font-medium shadow-md text-gray-800 p-1"
                    :key="index"
                    scope="col"
                  >
                    <p class="p-0 py-2 m-0 bg-white rounded-md">
                      {{ items.title }}
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>5</td>
                  <td>سرویس لاگ</td>
                  <td>نمایش لاگ</td>
                  <td>1335441</td>
                  <td>98711199</td>
                  <td>1400/05/02</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>5</td>
                  <td>سرویس لاگ</td>
                  <td>نمایش لاگ</td>
                  <td>1335441</td>
                  <td>98711199</td>
                  <td>1400/05/02</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>5</td>
                  <td>سرویس لاگ</td>
                  <td>نمایش لاگ</td>
                  <td>1335441</td>
                  <td>98711199</td>
                  <td>1400/05/02</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>5</td>
                  <td>سرویس لاگ</td>
                  <td>نمایش لاگ</td>
                  <td>1335441</td>
                  <td>98711199</td>
                  <td>1400/05/02</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>5</td>
                  <td>سرویس لاگ</td>
                  <td>نمایش لاگ</td>
                  <td>1335441</td>
                  <td>98711199</td>
                  <td>1400/05/02</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- finishTabel -->
        </div>
        <div class="LogModalFooter">
          <button
            type="button"
            class="BtnCloseLogModal"
            data-bs-dismiss="modal"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
