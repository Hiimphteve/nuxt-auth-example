<script setup>
const { data } = useAuth()
</script>

<template>
Hello {{data.user?.name}}!
</template>

<style scoped>

</style>
