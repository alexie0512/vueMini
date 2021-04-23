<template>
  <div>
    <!-- 实现导航栏的跳转 -->
    <template>
      <v-tabs :value="0" background-color="primary">
        <v-tab @click="$router.push({ name: 'Case' })">TestCases</v-tab>
        <v-tab @click="$router.push({ name: 'Task' })">Tasks</v-tab>
        <v-tab @click="$router.push({ name: 'Jenkins' })">Jenkins</v-tab>
        <v-tab @click="$router.push({ name: 'Report' })">Report</v-tab>
      </v-tabs>
    </template>

    <!-- 点击【添加用例】后的弹出框卡片 -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>Add TestCase</v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field
              label="Summary"
              v-model="addItem.summary"
              required
            ></v-text-field>
            <v-select
              :items="selectItem"
              label="Type"
              v-model="addItem.type"
              required
            ></v-select>
            <v-file-input
                  label="Testcase file"
                  v-model="addItem.file"
                  v-if="addItem.type=='File'"
                  outlined
                  dense
            ></v-file-input>
            <v-textarea
              label="Testcase data"
              v-model="addItem.casedata"
              v-if="addItem.type=='Text'"
              required
            ></v-textarea>
            <v-text-field
              label="Comment"
              v-model="addItem.comment"
            ></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="addCases()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 定义【添加用例】【生成测试任务】两个按钮 -->
    <v-btn color="primary" class="btn" @click="add()">Add TestCases</v-btn>
    <v-btn color="success" class="btn">Generate Tasks</v-btn>

    <!-- 用例列表 -->
    <template>
      <v-card>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          item-key="name"
          show-select
          class="elevation-1"
        >
          <template v-slot:[`item.operate`]="{item}">
            <v-btn color="primary" text small>Edit</v-btn>
            <v-btn color="error" text small>Delete</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </template>
  </div>
</template>
  </div>
</template>


<script>
export default {

  data() {
    return {
      addItem: {
        summary: "",
        type: "",
        file: "",
        casedata: "",
        comment: "",
      },
      selectItem: ["File", "Text"],
      dialog: false,
      selected: [],
      headers: [
        {
          text: "Case ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Summary", value: "caseName" },
        { text: "Type", value: "type" },
        { text: "Action", value: "operate" },
      ],
      desserts: [
        {
          id:'1',
          caseName:'123',
          type: 'text',
          operate: ''

        }],
    };
  },

  // 在页面加载完成后拿到现有数据
  created() {
    let get_params = {
      pageNum: 0,
      pageSize: 10,
    };
    this.$api.cases.getCases(get_params).then((res) => {
      console.log(res), (this.desserts = res.data.data.data);
    });
  },
  methods: {
    add() {
      this.dialog = true;
    },


    // 点击【添加用例】按钮-保存操作逻辑
    addCases() {
      console.log(this.addItem)

      if(this.addItem.type=='Text'){
      let post_data = {
        summary: this.addItem.summary,
        casedata: this.addItem.casedata,
        comment: this.addItem.comment
      }
      this.$api.cases.createCasesbyText(post_data).then((res) => {
        console.log(res)
      })
      }else if(this.addItem.type=='File'){
        let post_data = new FormData()
        post_data.append('summary',this.addItem.summary)
        post_data.append('casedata',this.addItem.casedata)
        post_data.append('caseFile',this,this.addItem.file)

      this.$api.cases.createCasesbyFile(post_data).then((res)=>{
        console.log(res)
      }) 
      }
      
      //关闭对话框
      this.dialog=false

      //重新获取用例列表
      let get_params = {
      pageNum: 0,
      pageSize: 10,
    }
    this.$api.cases.getCases(get_params).then((res) => {
      console.log(res), (this.desserts = res.data.data.data);
    })
    },
  },
};
</script>



<style scoped>
.btn {
  margin: 10px;
}
</style>