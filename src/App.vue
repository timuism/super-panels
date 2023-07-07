<script setup lang="ts">
import Kamehouse from "./assets/kamehouse.jpg"
import Panel from "./components/Panel.vue";
import PanelHeader from "./components/PanelHeader.vue";
import PanelContent from "./components/PanelContent.vue";

const people = [
  {
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Jane Smith",
    description: "Nulla vel tincidunt lorem, eu commodo nisi."
  },
  {
    name: "Michael Johnson",
    description: "Sed vitae erat in justo vulputate ullamcorper."
  },
  {
    name: "Emily Davis",
    description: "Fusce ut urna vestibulum, bibendum mi nec, congue ligula."
  },
  {
    name: "William Wilson",
    description: "Pellentesque eu nulla at ligula luctus finibus."
  },
  {
    name: "Olivia Brown",
    description: "Vestibulum consectetur neque et velit rutrum dapibus."
  },
  {
    name: "James Taylor",
    description: "Etiam sed nisl non lacus fringilla fringilla eu ut justo."
  },
  {
    name: "Matthew Clark",
    description: "Vivamus finibus mauris a est eleifend elementum."
  },
  {
    name: "Ava Rodriguez",
    description: "Ut non mi eleifend, ultrices odio sed, efficitur tortor."
  },
  {
    name: "Andrew Lee",
    description: "In fermentum mi ut arcu volutpat, nec dictum lectus consequat."
  },
  {
    name: "Mia Scott",
    description: "Sed non metus tincidunt, pellentesque dolor et, vulputate risus."
  },
  {
    name: "Joseph Lopez",
    description: "Quisque eu lorem et arcu consequat facilisis vitae sit amet risus."
  },
  {
    name: "Charlotte Adams",
    description: "Nam sed nisi sed ex dictum volutpat vitae sed lectus."
  },
  {
    name: "Benjamin Hernandez",
    description: "Nunc tristique dolor a malesuada maximus. Ut luctus ex id tincidunt aliquam."
  },
  {
    name: "Harper Hall",
    description: "Phasellus ac turpis et orci semper venenatis sed a quam."
  },
  {
    name: "William Gonzalez",
    description: "Fusce luctus sapien eu justo aliquam, non ultrices orci vulputate."
  },
  {
    name: "Victoria White",
    description: "Vestibulum gravida metus in mauris pellentesque, sit amet rhoncus nunc pellentesque."
  }
];
</script>

<template>
  <main class="h-screen w-screen">
    <Panel>
      <PanelHeader>
        <h1 class="text-4xl text-blue-700 font-light">Panel</h1>
      </PanelHeader>

      <PanelContent>
        <ul class="space-y-6 py-6">
          <li v-for="{ name, description } in people" :key="name" class="px-6">
            <h2 class="text-2xl text-blue-700 font-semibold">{{ name }}</h2>
            <p class="text-lg font-medium text-blue-400">{{ description }}</p>
          </li>
        </ul>
      </PanelContent>
    </Panel>

    <div class="w-screen h-screen">
      <img :src="Kamehouse" class="object-cover w-full h-full" />
    </div>
  </main>
</template>