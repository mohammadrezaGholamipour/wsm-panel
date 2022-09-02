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
    name: "عرفان",
    lastname: "نعمتی",
    phone: "09195412801",
    studentCode: "58433216",
  },
  {
    id: 8,
    name: "حسین",
    lastname: "مقانلو",
    phone: "03525412835",
    studentCode: "25874136",
  },
  {
    id: 9,
    name: "ابوالفضل",
    lastname: "زندیه",
    phone: "09192605481",
    studentCode: "96157428",
  },
  {
    id: 10,
    name: "ابوالفضل",
    lastname: "آیدی",
    phone: "09362574121",
    studentCode: "10025849",
  },
  {
    id: 10,
    name: "ابوالفضل",
    lastname: "آیدی",
    phone: "09362574121",
    studentCode: "10025849",
  },
]);
</script>
<template>
  <div class="ParentTabel">
    <div class="overflow-auto w-full h-full shadow-2xl bg-white rounded-lg">
      <table class="Table">
        <thead>
          <tr style="background-color: #3b82f6; color: white">
            <th scope="col" class="font-medium px-6 py-4">ردیف</th>
            <th scope="col" class="font-medium px-6 py-4">نام</th>
            <th scope="col" class="font-medium px-6 py-4">نام خانوادگی</th>
            <th scope="col" class="font-medium px-6 py-4">شماره تلفن همراه</th>
            <th scope="col" class="font-medium px-6 py-4">کد دانشجویی</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items, index) in Table" :key="items.id">
            <td class="px-6 py-4 whitespace-nowrap">
              {{ index + 1 }}
            </td>
            <td class="px-6 py-4">
              {{ items.name }}
            </td>
            <td class="px-6 py-4">
              {{ items.lastname }}
            </td>
            <td class="px-6 py-4">
              {{ items.phone }}
            </td>
            <td class="px-6 py-4">
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
