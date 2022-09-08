<script setup>
import { saveExcel } from "@progress/kendo-vue-excel-export";
import { ref } from "@vue/reactivity";
const TableService = ref({
  status: 200,
  meta_data: {
    current_page: 2,
    page_size: 20,
    total: 8643,
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
      Id: 10259,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران - 21 تیرماه 1401- تلاش سوم",
      Input: "1401/03/18,1401/04/21",
      state: 5,
      DateRun: "2022-07-12T12:43:22.083",
      IsActive: true,
      CreatedDate: "2022-07-12T12:43:26.583",
      ModifiedDate: "2022-07-14T09:32:33.817",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 10257,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران - 21 تیرماه 1401 تلاش سوم",
      Input: "1401/03/18,1401/04/21",
      state: 5,
      DateRun: "2022-07-12T11:35:28.467",
      IsActive: true,
      CreatedDate: "2022-07-12T11:35:33.203",
      ModifiedDate: "2022-07-12T13:59:32.05",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 10256,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران - 21 تیرماه 1401 تلاش دوم",
      Input: "1401/03/18,1401/04/21",
      state: 5,
      DateRun: "2022-07-12T11:30:37.767",
      IsActive: true,
      CreatedDate: "2022-07-12T11:30:42.12",
      ModifiedDate: "2022-07-12T11:31:36.97",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 10255,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران - 21 تیرماه 1401",
      Input: "1401/03/28,1401/04/21",
      state: 5,
      DateRun: "2022-07-12T11:02:41.637",
      IsActive: true,
      CreatedDate: "2022-07-12T11:02:46.207",
      ModifiedDate: "2022-07-12T11:29:49.897",
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
    {
      Id: 10018,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "تغییرات خواهران - 26 اردیبهشت ماه 1401",
      Input: "1401/02/05,1401/02/26",
      state: 3,
      DateRun: "2022-05-16T14:50:33.2",
      IsActive: true,
      CreatedDate: "2022-05-16T14:50:37.657",
      ModifiedDate: "2022-06-18T13:10:40.547",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9936,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "تغییرات خواهران - 5 اردیبهشت ماه 1401",
      Input: "1401/01/25,1401/02/05",
      state: 3,
      DateRun: "2022-04-25T15:00:39.437",
      IsActive: true,
      CreatedDate: "2022-04-25T15:00:43.86",
      ModifiedDate: "2022-04-26T09:38:16.167",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9931,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "تغییرات خواهران-5 اردیبهشت 1401",
      Input: "1401/01/25,1401/02/05",
      state: 5,
      DateRun: "2022-04-25T13:27:45.277",
      IsActive: true,
      CreatedDate: "2022-04-25T13:27:49.777",
      ModifiedDate: "2022-06-18T13:22:12.67",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9930,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "تغییرات خواهران-4 اردیبهشت 1401",
      Input: "1401/01/25,1401/02/04",
      state: 3,
      DateRun: "2022-04-24T12:54:16.223",
      IsActive: true,
      CreatedDate: "2022-04-24T12:54:20.527",
      ModifiedDate: "2022-04-25T13:18:16.087",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9928,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "تغییرات خواهران-تست-4 اردیبهشت 1401",
      Input: "1400/12/01",
      state: 5,
      DateRun: "2022-04-24T11:41:26.543",
      IsActive: true,
      CreatedDate: "2022-04-24T11:41:31.03",
      ModifiedDate: "2022-04-24T12:52:59.613",
      CreatedBy: 50002,
      ModifiedBy: 1199,
    },
    {
      Id: 9924,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران - 1 اردیبهشت 1401",
      Input: "1401/01/25,1401/02/01",
      state: 5,
      DateRun: "2022-04-21T12:48:08.503",
      IsActive: true,
      CreatedDate: "2022-04-21T12:48:12.887",
      ModifiedDate: "2022-04-21T12:59:52.207",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9899,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران -25 فروردین",
      Input: "1401/01/15,1401/01/25",
      state: 3,
      DateRun: "2022-04-14T11:42:52.82",
      IsActive: true,
      CreatedDate: "2022-04-14T11:42:57.357",
      ModifiedDate: "2022-04-21T12:45:18.677",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9858,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران - 15 فروردین 1401",
      Input: "1400/12/21,1401/01/15",
      state: 3,
      DateRun: "2022-04-04T11:07:44.707",
      IsActive: true,
      CreatedDate: "2022-04-04T11:07:49.25",
      ModifiedDate: "2022-04-14T11:42:15.963",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9826,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات مدیریت خواهران - 21 اسفندماه 1400",
      Input: "1400/12/08,1400/12/21",
      state: 3,
      DateRun: "2022-03-12T15:04:56.633",
      IsActive: true,
      CreatedDate: "2022-03-12T15:05:01.15",
      ModifiedDate: "2022-04-04T11:06:42.317",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9794,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات مدیریت خواهران - 8 اسفندماه 1400",
      Input: "1400/12/03,1400/12/08",
      state: 3,
      DateRun: "2022-02-27T12:05:10.107",
      IsActive: true,
      CreatedDate: "2022-02-27T12:05:14.793",
      ModifiedDate: "2022-03-02T11:24:54.947",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9776,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران- 3 اسفندماه 1400",
      Input: "1400/11/19,1400/12/03",
      state: 3,
      DateRun: "2022-02-22T10:51:19.16",
      IsActive: true,
      CreatedDate: "2022-02-22T10:51:23.817",
      ModifiedDate: "2022-02-27T12:04:02.307",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9752,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران - 19 بهمن ماه 1400",
      Input: "1400/11/19,1400/11/28",
      state: 3,
      DateRun: "2022-02-17T13:08:50.053",
      IsActive: true,
      CreatedDate: "2022-02-17T13:08:54.46",
      ModifiedDate: "2022-02-22T10:50:28.137",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9704,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات خواهران - 18 بهمن 1400",
      Input: "1400/11/06,1400/11/18",
      state: 3,
      DateRun: "2022-02-07T10:08:53.64",
      IsActive: true,
      CreatedDate: "2022-02-07T10:08:58.11",
      ModifiedDate: "2022-02-17T13:07:41.107",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
    {
      Id: 9666,
      Serviceid: 4,
      Servicemethodid: 1022,
      Servicemethodname: "فردی  تغییرات خواهران",
      ServiceName: "خواهران",
      TypeRun: 0,
      SleepRun: 0,
      Name: "اجرای تغییرات 6 بهمن ماه 1400",
      Input: "1400/10/30,1400/11/06",
      state: 3,
      DateRun: "2022-01-26T09:22:35.733",
      IsActive: true,
      CreatedDate: "2022-01-26T09:22:41.267",
      ModifiedDate: "2022-01-27T08:37:17.723",
      CreatedBy: 1199,
      ModifiedBy: 1199,
    },
  ],
});
const InputTableService = ref([
  { name: "کد", value: "", input: "Servicemethodid" },
  { name: "نام", value: "", input: "Name" },
  { name: "نام سرویس", value: "", input: "ServiceName" },
  { name: "نام متد", value: "", input: "Servicemethodname" },
]);
const ExportExcel = () => {
  saveExcel({
    data: TableService.value.data,
    fileName: "TableService",
    columns: [
      { field: "Id", title: "کد" },
      { field: "Name", title: "نام" },
      { field: "ServiceName", title: "نام سرویس" },
      { field: "Servicemethodname", title: "نام متد" },
    ],
  });
};
</script>
<template>
  <div class="ParentTabel relative">
    <table class="Table">
      <thead>
        <tr id="FirstTr">
          <th class="p-2">
            <button class="ExcelBtn" @click="ExportExcel">
              <font-awesome-icon icon="fa-solid fa-print" />
            </button>
          </th>
          <th
            v-for="(items, index) in InputTableService"
            class="font-medium p-1"
            :key="index"
            scope="col"
          >
            <input
              @input="HandelFilterInput(items.input, items.value)"
              :placeholder="items.name"
              v-model="items.value"
              class="InputTabel"
              type="text"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in TableService.data" :key="index">
          <td class="py-4">
            {{ index + 1 }}
          </td>
          <td class="py-4">
            {{ items.Id }}
          </td>
          <td class="py-4">
            {{ items.Name }}
          </td>
          <td class="py-4">
            {{ items.ServiceName }}
          </td>
          <td class="py-4">
            {{ items.Servicemethodname }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="TablePagination">
      <ul class="UlPagination">
        <li>
          <a class="BtnNextOrPrevPagination bg-red-500">قبلی</a>
        </li>
        <li>
          <a class="PagePagination">1</a>
        </li>
        <li>
          <a class="PagePagination border-4 border-green-700"> 2 </a>
        </li>
        <li>
          <a class="PagePagination">3</a>
        </li>
        <li>
          <a class="BtnNextOrPrevPagination bg-blue-500">بعدی</a>
        </li>
      </ul>
    </div>
    <!-- ////////////////////////////////////////// -->
  </div>
</template>
