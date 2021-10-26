export default function ({ store, redirect }) {
  if (!store.state.user.tokens && !store.state.user.is_staff) {
    return redirect('/')
  }
}
