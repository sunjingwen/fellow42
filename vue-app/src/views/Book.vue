<template>
  <div
    id="book"
    v-loading.fullscreen="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
  >
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carouselList" :key="item">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab">
      <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="虚构类" name="fiction">
          <!-- <div class="book-list">
            <el-row v-for="item in bookList" :key="item.id">
              <el-col :span="8">
                <div class="img">
                  <img :src="item.cover.url" alt />
                </div>
              </el-col>
              <el-col :span="16">
                <div class="content">
                  <h3>{{item.title}}</h3>
                  <p>{{item.info}}</p>
                  <div class="rate">
                    <el-rate
                      :value="getRate(item.rating.value)"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                    ></el-rate>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>-->
        </el-tab-pane>
        <el-tab-pane label="非虚构类" name="nonfiction">
          <!-- <div class="book-list">
            <el-row v-for="item in bookList" :key="item.id">
              <el-col :span="8">
                <div class="img">
                  <img :src="item.cover.url" alt />
                </div>
              </el-col>
              <el-col :span="16">
                <div class="content">
                  <h3>{{item.title}}</h3>
                  <p>{{item.info}}</p>
                  <div class="rate">
                    <el-rate
                      :value="getRate(item.rating.value)"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                    ></el-rate>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>-->
        </el-tab-pane>
      </el-tabs>
      <div class="book-list">
        <el-row v-for="item in bookList" :key="item.id">
          <el-col :span="8">
            <div class="img">
              <img :src=" 'https://images.weserv.nl/?url=' +  item.cover.url" alt />
            </div>
          </el-col>
          <el-col :span="16">
            <div class="content">
              <h3>{{item.title}}</h3>
              <p>{{item.info}}</p>
              <div class="rate">
                <el-rate
                  :value="getRate(item.rating.value)"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselList: [],
      bookList: [],
      activeName: "fiction",
      loading: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let bookUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/book_${this.activeName}/items?os=ios&start=0&count=8`;
      this.axios
        .get(baseUrl + bookUrl)
        .then((res) => {
          this.carouselList = res.data.subject_collection_items.map((item) => {
            return item.cover.url;
          });
          this.bookList = res.data.subject_collection_items;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClick() {
      this.getData();
    },
    getRate(num) {
      // num =  2.5
      let val = num / 2; //1.25
      val = val * 10; //12.5
      val = Math.trunc(val); //12
      val = val / 10; //1.2
      return val;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  img {
    width: 100%;
  }
}
.tab {
  padding: 0.2rem;
  .book-list {
    .img {
      img {
        width: 100%;
      }
    }
    .content {
      padding: 0.2rem;
      h3 {
        font-weight: bolder;
        margin-bottom: 0.4rem;
      }
    }
  }
}
</style>