import React,{Component} from 'react';
import Header from './components/Header.js'
import MemberList from "./components/MemberList.js";
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            letter:'',
            keyword:''
        };
        this.gotoDetail = this.gotoDetail.bind(this);
    }
    // 按字母进行筛选
    selectLetter(letter){
        this.setState({letter})
    }
    // 按关键字搜索
    search(keyword){
        this.setState({keyword});
    }
    gotoDetail(){
        this.props.history.push('/attendence/staff/detail');
    }
    render(){
        return (
            <div style={{...this.props.style}}>
                <Header selectLetter={this.selectLetter.bind(this)} letter={this.state.letter} search={this.search.bind(this)}
                        placeholder='请输入姓名'/>
                <MemberList filed1='attrendance' filed2='staffs' type='getStaffs' url="/api/get/staffList" title="公司职员" letter={this.state.letter} keyword={this.state.keyword} gotoDetail={this.gotoDetail}/>
            </div>
        )
    }

}
export default Main;