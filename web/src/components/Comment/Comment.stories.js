import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        name: 'Vashu Patel',
        body: 'HW3 Test Comment',
        createdAt: '2022-01-01T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    id: 1,
    email: 'moderator@moderator.com',
    roles: 'moderator',
  })
  return (
    <Comment
      comment={{
        name: 'Vashu Patel',
        body: 'HW3 Test Comment',
        createdAt: '2022-01-01T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
}
