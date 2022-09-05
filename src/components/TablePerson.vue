<script setup>
import { saveExcel } from "@progress/kendo-vue-excel-export";
import { ref } from "@vue/reactivity";

const Table = ref([
  {
    name: "محمدرضا",
    lastname: "غلامی پور",
    phone: "09036266494",
    studentCode: "98711199",
  },
  {
    name: "مهدی",
    lastname: "اقایی",
    phone: "09127488024",
    studentCode: "56842399",
  },
  {
    name: "علی",
    lastname: "تاج زاده",
    phone: "09012931921",
    studentCode: "12541218",
  },
  {
    name: "علیرضا",
    lastname: "بادیلنو",
    phone: "09108216164",
    studentCode: "15974583",
  },
  {
    name: "حسن",
    lastname: "یوسفی",
    phone: "09100585915",
    studentCode: "200157868",
  },
  {
    name: "محمد امین",
    lastname: "عباسی",
    phone: "09372203018",
    studentCode: "54569218",
  },
  {
    name: "ابوالفضل",
    lastname: "آیدی",
    phone: "09362574121",
    studentCode: "10025849",
  },
  {
    name: "عرفان",
    lastname: "نعمتی",
    phone: "09195412801",
    studentCode: "58433216",
  },
  {
    name: "حسین",
    lastname: "مقانلو",
    phone: "09379571175",
    studentCode: "25874136",
  },
  {
    name: "ابوالفضل",
    lastname: "زندیه",
    phone: "09192605481",
    studentCode: "96157428",
  },
  {
    name: "محمدرضا",
    lastname: "مقدم منش",
    phone: "09212931921",
    studentCode: "58422219",
  },
  {
    name: "سعید",
    lastname: "حمیدیان",
    phone: "09124582196",
    studentCode: "44136259",
  },
]);
const TableFilter = ref([]);
const InputTable = ref([
  { name: "نام", value: "", input: "name" },
  { name: "نام خانوادگی", value: "", input: "lastname" },
  { name: "شماره تلفن همراه", value: "", input: "phone" },
  { name: "کد دانشجویی", value: "", input: "studentCode" },
]);
const HandelFilterInput = (input, value) => {
  const InputValue = InputTable.value.every((items) => items.value === "");
  if (InputValue) {
    TableFilter.value = [];
  } else {
    Table.value.filter((items) => {
      if (items[input] === value) {
        TableFilter.value.push(items);
      }
    });
  }
};
const ExportExcel = () => {
  saveExcel({
    data: Table.value,
    fileName: "Person",
    columns: [
      { field: "name" },
      { field: "lastname" },
      { field: "phone" },
      { field: "studentCode" },
    ],
  });
};
</script>
<template>
  <div class="ParentTabel">
    <table class="Table">
      <thead>
        <tr style="background-color: #cbd5e1">
          <th class="p-1 text-center ">
            <button class="ExcelBtn" @click="ExportExcel">
              <font-awesome-icon icon="fa-solid fa-print" />
            </button>
          </th>
          <th
            v-for="(items, index) in InputTable"
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
      <tbody v-if="TableFilter.length">
        <tr v-for="(items, index) in TableFilter" :key="index">
          <td class="py-4">
            {{ index + 1 }}
          </td>
          <td class="py-4">
            {{ items.name }}
          </td>
          <td class="py-4">
            {{ items.lastname }}
          </td>
          <td class="py-4">
            {{ items.phone }}
          </td>
          <td class="py-4">
            {{ items.studentCode }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="(items, index) in Table" :key="index">
          <td class="py-4">
            {{ index + 1 }}
          </td>
          <td class="py-4">
            {{ items.name }}
          </td>
          <td class="py-4">
            {{ items.lastname }}
          </td>
          <td class="py-4">
            {{ items.phone }}
          </td>
          <td class="py-4">
            {{ items.studentCode }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- ////////////////////////////////////////// -->
    <div class="flex justify-center items-center pb-2 pt-2 text-sm">
      <ul class="flex list-style-none">
        <li class="page-item disabled">
          <a
            class="page-link py-3 px-3 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-white bg-red-500 shadow-md focus:shadow-none cursor-not-allowed"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >قبلی</a
          >
        </li>
        <li class="page-item mx-1">
          <a class="page-link py-3 px-6 relative block" href="#">1</a>
        </li>
        <li class="page-item active mx-1">
          <a
            class="page-link py-3 px-5 relative block border-0 bg-white rounded-full text-black shadow-md"
            href="#"
            >2 <span class="visually-hidden">(current)</span></a
          >
        </li>
        <li class="page-item mx-1">
          <a class="page-link py-3 px-6 relative block" href="#">3</a>
        </li>
        <li class="page-item">
          <a
            class="page-link py-3 px-3 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-white bg-green-500 shadow-md focus:shadow-none"
            href="#"
            >بعدی</a
          >
        </li>
      </ul>
    </div>
    <!-- ////////////////////////////////////////// -->
  </div>
</template>