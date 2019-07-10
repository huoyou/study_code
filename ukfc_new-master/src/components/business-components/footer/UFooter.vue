<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <p class="copyright">
          Copyright &copy; 2019 ukfex.com All Rights Resevered by UKF GROUP Technology London, England
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "UFooter"
  }
</script>

<style lang="scss">
@import "../../../common/css/break-points";
.footer{
  background-color: #202020;
  .copyright{
    width: 100%;
    padding: 36px 0;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
}
@media (max-width: $xl) {
  .footer{
    .copyright{
      font-size: 18px;
    }
  }
}
@media (max-width: $lg) {
  .footer{
    .copyright{
      font-size: 16px;
    }
  }
}
@media (max-width: $md) {
  .footer{
    .copyright{
      padding: 15px 0;
      font-size: 14px;
    }
  }
}
</style>
