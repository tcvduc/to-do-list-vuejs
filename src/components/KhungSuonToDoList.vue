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
</style>

<template>
  <div class="khungSuongToDoList">
    <div class="title">Việc Làm Hôm Nay</div>

    <ThanhNhap
      :handleInputOnKeydown="handleInputOnKeydown"
      :handleAddButtonOnClick="handleAddButtonOnClick"
    />
    <DanhSachViec
      :tasks="tasks"
      :handleCloseButtonOnclick="handleCloseButtonOnclick"
    />
  </div>
</template>

<script>
import ThanhNhap from "./ThanhNhap.vue";
import DanhSachViec from "./DanhSachViec.vue";

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
  },
  data: () => {
    return {
      tasks: [],
    };
  },
  methods: {
    handleInputOnKeydown,
    handleAddButtonOnClick,
    handleCloseButtonOnclick,
  },
};
</script>
