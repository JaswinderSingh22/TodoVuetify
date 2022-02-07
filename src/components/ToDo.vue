<template>
  <div class="Todo">
    <div class="input">
      <div v-if="!editing">
        <v-row class="d-flex justify-center">
          <v-col cols="8" md="2">
          <v-text-field
            label="Enter your Task"
            v-model="new_todo"
          ></v-text-field>
          </v-col>
          <v-col cols="1" md="1">
            <v-btn class="mx-1" large color="primary" @click="add_task"
              >Add Task</v-btn
            >
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row class="d-flex justify-center">
          <v-col cols="7" md="2">
          <v-text-field
            label="Update your Task"
            large
            color="primary"
            v-model="edited_todo"
          ></v-text-field>
          </v-col>
          <v-col cols="1" md="1">
            <v-btn @click="update_task">Update</v-btn>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="tasks">
      <transition-group name="fade">
        <v-card
          class="mx-auto pa-3 ma-2 text-center"
          max-width="400"
          v-for="(todo, index) in $store.state.TASK_ARR"
          :key="index"
        >
          <v-row>
            <v-col cols="8">
              <v-list-item-title class="headline mb-1">{{
                todo
              }}</v-list-item-title>
            </v-col>
            <v-col cols="4">
              <v-btn
                icon
                color="blue"
                @click="edit_task(todo, index)"
                :key="index"
                >Edit</v-btn
              >
            </v-col>
            <v-col cols="4">
              <v-btn icon color="red"  @click="remove_task(task)"
                >Remove <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </transition-group>
    </div>

    <v-footer
      class="text-center"
      color="primary lighten-1"
      app
      bottom
      fixed
      padless
    >
      <div class="my-7">
        <h3>There are total {{ $store.getters.COUNT_TASKS }} Tasks</h3>
        <v-btn color="white" text rounded class="my-2" @click="remove_all"
          >RemoveAll</v-btn
        >
        <v-divider></v-divider>
        <v-card-text
          class="primary lighten-2 py-4 text-center white--text align-center"
          align="center"
        >
          {{ new Date().getFullYear() }} — <strong>Albanero.io</strong>
        </v-card-text>
      </div>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import store from "../store";

@Component
export default class ToDo extends Vue {
  new_todo = "";
  editing = false;
  edited_todo = "";
  Edited_index = 0;

  add_task(): void {
    if (this.new_todo == "") {
      alert("Please Enter a Task");
    } else {
      store.dispatch("add_task", this.new_todo);
      console.log(this.new_todo);
      this.new_todo = "";
    }
  }

  remove_task(todo: string): void {
    store.dispatch("remove_task", todo);
  }

  remove_all(): void {
    alert("Are you sure");
    store.dispatch("remove_all");
  }

  edit_task(todo: string, index: number) {
    console.log(index);

    this.Edited_index = index;
    this.editing = true;
    this.edited_todo = store.state.TASK_ARR[index];
  }
  update_task() {
    let payload = { todo: this.edited_todo, id: this.Edited_index };

    store.dispatch("update_task", payload);

    this.edited_todo = "";
    this.editing = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
