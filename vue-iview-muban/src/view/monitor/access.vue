<template>
    <div style="height: 100%">
        <Card style="height: 100%">
        <upload></upload>
        <upload-img  :src="'/api/imgs'"></upload-img>
        </Card>
    </div>
</template>
<script>
import upload from '_c/common/upload'
import uploadImg from '_c/common/uploadImg'
export default {
    components: {
        upload,
        uploadImg
    }
}
</script>
