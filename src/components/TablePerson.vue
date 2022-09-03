<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

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
]);
const TableFilter = ref([]);
const InputTable = ref([
  { name: "نام", value: "", input: "name" },
  { name: "نام خانوادگی", value: "", input: "lastname" },
  { name: "شماره تلفن همراه", value: "", input: "phone" },
  { name: "کد دانشجویی", value: "", input: "studentCode" },
]);

const HandelFilterInput = (input, value) => {
  const AllInput = InputTable.value.every((items) => items.value === "");
  if (AllInput) {
    TableFilter.value = [];
  } else {
    Table.value.filter((items) => {
      if (items[input] === value) {
        TableFilter.value.push(items);
      }
    });
  }
};
</script>
<template>
  <div class="ParentTabel">
    <div class="overflow-auto w-full h-full shadow-2xl bg-white rounded-lg">
      <table class="Table">
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
        <tbody v-else>
          <tr v-for="(items, index) in Table" :key="index">
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
    </div>
  </div>
</template>
<style>
.test {
  padding: 0px !important;
}
</style>
