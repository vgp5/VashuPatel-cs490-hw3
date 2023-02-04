import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'Vashu Patel',
        body: 'HW3 Test Comment',
        createdAt: '2022-01-01T12:34:56Z',
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
}
