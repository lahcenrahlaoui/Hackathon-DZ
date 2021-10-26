export default function ({ store, redirect }) {
  if (store.state.user.info.tokens ) {
    console.log(store.state.user.info);
    const url=store.state.user.info.isAdmin? '/admin/dashboard' : '/user/dashboard'
    return redirect(url)
  }
}
