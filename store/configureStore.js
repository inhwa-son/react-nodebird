import { createWrapper } from 'next-redux-wraooer'
const configureStore = () => {

}
const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'devlopment' });
export default wrapper
