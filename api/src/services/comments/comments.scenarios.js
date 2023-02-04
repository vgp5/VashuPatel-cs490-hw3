export const standard = defineScenario({
  comment: {
    Vashu: {
      data: {
        name: 'Vashu Patel',
        body: 'I love Soccer',
        post: {
          create: {
            title: 'FIFA',
            body: 'The quick brown fox jumped over the lazy dog.',
          },
        },
      },
    },
    Patel: {
      data: {
        name: 'Patel',
        body: 'Hug a tree today',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
          },
        },
      },
    },
  },
})

export const postOnly = defineScenario({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
      },
    },
  },
})
