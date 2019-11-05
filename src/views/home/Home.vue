<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl class="tab-control" :title="['流行','新款','精选']"></TabControl>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>

</template>

<script>
  import {getHomeMutiData, getHomeGoods} from "network/home";

  import NavBar from '../../components/common/navbar/NavBar'
  import TabControl from '../../components/content/tabControl/TabControl'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        }
      }
    },
    created() {
      //1、请求首页商品数据
      this.getHomeMultiData()

      //2、请求首页商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      getHomeMultiData() {
        getHomeMutiData().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
          this.goods.pop
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
        })
        this.goods[type].page = page
      }
    }
  }
</script>


<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
