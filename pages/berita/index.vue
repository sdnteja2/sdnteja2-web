<script lang="ts" setup>
const { data: beritaList } = await useAsyncData(() => {
  return queryCollection('berita')
    .select('title', 'description', 'path', 'id', 'date')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <div>
    <h1>Berita</h1>
    <p
      v-for="berita in beritaList"
      :key="berita.id"
    >
      >
      <nuxt-link :to="berita.path">
        <strong>{{ berita.title }}</strong>
      </nuxt-link>

      &nbsp;{{ berita.description }}
    </p>
  </div>
</template>
