import { connect } from 'react-redux'
import  Todos from '../components/todo'

const mapStateToProps = (state:any) => ({
    todos: state.todos,
    listData: state.listData
})

const mapDispatchToProps = (dispatch:any) => ({
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todos)