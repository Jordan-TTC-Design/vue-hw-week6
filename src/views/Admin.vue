<template>
  <div id="appAdmin" class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" data-action="newProduct" @click="openModal($event)">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="150">是否啟用</th>
          <th width="120">刪除</th>
        </tr>
      </thead>
      <tbody id="productList">
        <tr
          v-is="'productCardCompo'"
          v-for="product in products"
          :key="product.id"
          :item="product"
          @change-product-state="changeProductState"
          @open-modal="openModal"
        ></tr>
      </tbody>
    </table>
    <p>
      目前有 <span id="productCount">{{ products.length }}</span> 項產品
    </p>
    <pagination-compo :page="pagination" @get-product="getProductData"></pagination-compo>
    <product-modal-compo
      :tem-product="temProduct"
      :product-modal="productModal"
      @update-product="updateProduct"
    ></product-modal-compo>
    <!-- modal -->

    <div
      id="delProductModal"
      ref="delProductModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="delProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="delProductModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ temProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteProduct()">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
