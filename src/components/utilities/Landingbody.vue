<template>
  <div class="container padsup">
    <div class="columns">
      <div class="column is-3 pcol">
        <slot name="panel"></slot>
      </div>
        <div class="column is-6">
          <div class="columns dir">
            <div class="colum"> <slot name="edit"></slot> </div>
            <slot name="carousel"></slot>
            <div class="column">
              <slot name="process"></slot>
            </div>
          </div>
        </div>
      <div class="column is-3 is-hidden-mobile">
        <slot name="announces"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .column {
    border-radius: 6px;
  }
  .colcolor {
    background-color: #F1F4F6;
    margin: 6px;
  }
  .dir {
    flex-direction: column;
  }
</style>
