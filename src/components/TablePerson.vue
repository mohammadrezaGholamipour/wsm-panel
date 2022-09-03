<script setup>
import { ref } from "@vue/reactivity";

const Table = ref([
  {
    id: 1,
    name: "محمدرضا",
    lastname: "غلامی پور",
    phone: "09036266494",
    studentCode: "98711199",
  },
  {
    id: 2,
    name: "مهدی",
    lastname: "اقایی",
    phone: "09127488024",
    studentCode: "56842399",
  },
  {
    id: 3,
    name: "علی",
    lastname: "تاج زاده",
    phone: "09012931921",
    studentCode: "12541218",
  },
  {
    id: 4,
    name: "علیرضا",
    lastname: "بادیلنو",
    phone: "09108216164",
    studentCode: "15974583",
  },
  {
    id: 5,
    name: "حسن",
    lastname: "یوسفی",
    phone: "09100585915",
    studentCode: "200157868",
  },
  {
    id: 6,
    name: "محمد امین",
    lastname: "عباسی",
    phone: "09372203018",
    studentCode: "54569218",
  },
  {
    id: 7,
    name: "ابوالفضل",
    lastname: "آیدی",
    phone: "09362574121",
    studentCode: "10025849",
  },
  {
    id: 8,
    name: "عرفان",
    lastname: "نعمتی",
    phone: "09195412801",
    studentCode: "58433216",
  },
  {
    id: 9,
    name: "حسین",
    lastname: "مقانلو",
    phone: "09379571175",
    studentCode: "25874136",
  },
  {
    id: 10,
    name: "ابوالفضل",
    lastname: "زندیه",
    phone: "09192605481",
    studentCode: "96157428",
  },
]);
const TableFilter = ref([]);
const InputTable = ref([
  { id: 1, name: "نام", value: "", input: "name" },
  { id: 2, name: "نام خانوادگی", value: "", input: "lastname" },
  { id: 3, name: "شماره تلفن", value: "", input: "studentCode" },
  { id: 4, name: "کد دانشجویی", value: "", input: "phone" },
]);
const HandelFilterInput = (value, input) => {
  console.log(input);
  console.log(value);
  Table.value.filter((items) => {
    console.log(items.name);
  });
};
</script>
<template>
  <div class="ParentTabel">
    <div class="overflow-auto w-full h-full shadow-2xl bg-white rounded-lg">
      <table v-if="TableFilter.length" class="Table">
        <thead style="border-top-right-radius: 10px !important">
          <tr style="background-color: #3b82f6; color: white">
            <th scope="col" class="font-medium pb-1 pt-3 px-2">ردیف</th>
            <th scope="col" class="font-medium pb-1 pt-3 px-2">نام</th>
            <th scope="col" class="font-medium pb-1 pt-3 px-2">نام خانوادگی</th>
            <th scope="col" class="font-medium pb-1 pt-3 px-2">
              شماره تلفن همراه
            </th>
            <th scope="col" class="font-medium py-2 px-2">کد دانشجویی</th>
          </tr>
          <tr style="background-color: #3b82f6; color: white">
            <td class="py-4">1</td>
            <th
              v-for="(items, index) in InputTable"
              :key="index"
              scope="col"
              class="font-medium py-1"
            >
              <input
                :placeholder="items.name"
                v-model="items.value"
                class="InputTabel"
                type="text"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items, index) in TableFilter" :key="items.id">
            <td class="py-4">
              {{ index + 2 }}
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
      <table v-else class="Table">
        <thead style="border-top-right-radius: 10px !important">
          <tr style="background-color: #3b82f6; color: white">
            <th scope="col" class="font-medium pb-1 pt-3 px-2">ردیف</th>
            <th scope="col" class="font-medium pb-1 pt-3 px-2">نام</th>
            <th scope="col" class="font-medium pb-1 pt-3 px-2">نام خانوادگی</th>
            <th scope="col" class="font-medium pb-1 pt-3 px-2">
              شماره تلفن همراه
            </th>
            <th scope="col" class="font-medium py-2 px-2">کد دانشجویی</th>
          </tr>
          <tr style="background-color: #3b82f6; color: white">
            <td class="py-4">1</td>
            <th
              v-for="(items, index) in InputTable"
              :key="index"
              scope="col"
              class="font-medium py-1"
            >
              <input
                @input="HandelFilterInput(items.value, items.input)"
                :placeholder="items.name"
                v-model="items.value"
                class="InputTabel"
                type="text"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items, index) in Table" :key="items.id">
            <td class="py-4">
              {{ index + 2 }}
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
    </div>
  </div>
</template>
<style>
.test {
  padding: 0px !important;
}
</style>
