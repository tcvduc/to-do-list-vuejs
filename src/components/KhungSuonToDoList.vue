<style>
.khungSuongToDoList {
  border: 1px solid #000;
  width: 450px;
  height: 600px;
  background-color: #d8eaf9;
  display: flex;
  flex-direction: column;
}

.title {
  color: var(--title-color);
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.frame {
  display: flex;
}
</style>

<template>
  <div class="frame">
    <RouteComponent />

    <div class="khungSuongToDoList">
      <router-view> </router-view>

      <div class="title">To Do List</div>

      <ThanhNhap
        :handleInputOnKeydown="handleInputOnKeydown"
        :handleAddButtonOnClick="handleAddButtonOnClick"
      />
      <DanhSachViec
        :tasks="tasks"
        :handleCloseButtonOnclick="handleCloseButtonOnclick"
        :count-task="countTask"
      />
    </div>

    <StatisticComponent :count-task="countTask" />
  </div>
</template>

<script>
import ThanhNhap from "./ThanhNhap.vue";
import DanhSachViec from "./DanhSachViec.vue";
import axios from "axios";
import StatisticComponent from "./StatisticComponent.vue";
import RouteComponent from "./RouteComponent.vue";

const classes = {
  thanhNhap: "thanhNhap",
};

/**
 *
 * @param {KeyboardEvent} event
 */
function handleInputOnKeydown(event) {
  const thanhNhap = window.document.getElementsByClassName(
    classes.thanhNhap
  )[0];

  if (event.key === "Enter") {
    const task = thanhNhap.value;
    this.tasks.push(task);
    thanhNhap.value = "";
    return;
  }
}

function handleAddButtonOnClick() {
  const thanhNhap = window.document.getElementsByClassName(
    classes.thanhNhap
  )[0];
  const inputValue = thanhNhap.value;

  if (inputValue === "") {
    return;
  }

  this.tasks.push(inputValue);
  thanhNhap.value = "";

  return;
}

/**
 *
 * @param {String} s1
 * @param {String} s2
 * @returns {Boolean}
 */
function isTwoStringTheSame(s1, s2) {
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;

  let linhCanh = true;
  let length = s1.length;

  for (let i = 0; i <= length; ++i) {
    if (s1[i] !== s2[i]) {
      linhCanh = false;
      break;
    }
  }

  return linhCanh;
}

/**
 *
 * @param {String} task
 */
function handleCloseButtonOnclick(task) {
  const tasks = this.tasks;

  for (let i = 0; i <= tasks.length - 1; ++i) {
    const taski = tasks[i];

    if (isTwoStringTheSame(taski, task)) {
      const index = i;
      this.tasks.splice(index, 1);
      i--;
      break;
    }
  }
}

export default {
  name: "KhungSuongToDoList",
  components: {
    ThanhNhap,
    DanhSachViec,
    StatisticComponent,
    RouteComponent,
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  data: function () {
    return {
      tasks: [],
      countTask: 0,
      currentRoute: window.location.pathname,
    };
  },
  methods: {
    handleInputOnKeydown,
    handleAddButtonOnClick,
    handleCloseButtonOnclick,
  },

  mounted: function () {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url).then((res) => {
      for (let i = 0; i <= res.data.length - 1 - 90; ++i) {
        this.tasks.push(res.data[i].title);
        window.setTimeout(() => {
          this.countTask = res.data.length - 90;
        }, 1300);
      }
    });
  },
};
</script>
