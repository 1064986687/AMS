import {combineReducers} from 'redux'
const defaultStaffs =  [
                {
        member_id:1,
        member_name:'李青伟',
        phone:15085004646,
        leader:true,
        letter:'Q',
        position:'研究员',
        like:1,
        dpart_name:'web'
    },
    {
        member_id:2,
        member_name:'农怀恩',
        phone:18146568320,
        leader:true,
        letter:'Z',
        like:0,
        position:'研究员',
        dpart_name:'web'
    },
    {
        member_id:3,
        member_name:'余伟',
        letter:'D',
        phone:18801035680,
        leader:true,
        like:1,
        dpart_name:'java'
    },
    {
        member_id:4,
        member_name:'王杰',
        letter:'H',
        phone:18811729938,
        leader:true,
        like:0,
        dpart_name:'java'
    }
];
const defaultCommon = [];
const defaultExter = [
                {
                    member_id:8,
                    member_name:'谭方川',
                    like:0,
                    phone:['18599359176']
                }
            ];
function staffs(staffs=defaultStaffs, action) {
    switch (action.type){
        case 'changeCommon':
            return staffs.map(staff =>{
                if(staff.member_id === action.member_id){
                  staff.like = action.flag
                }
                return staff;
            });
        default:
            return staffs
    }
}
function commons(commons=defaultCommon, action) {
    switch (action.type){
        case 'delCommon':
            return commons.filter(common => {
                return common.member_id !== action.member.member_id;
            });
        case 'addCommon':
            return [...commons,Object.assign({},action.member,{like:1})];
        default:
            return commons
    }
}
function externals(externals=defaultExter,action) {
    switch (action.type){
        case 'addExternal':
            externals.push({...action.params,...{member_id:new Date().getTime()}});
            return externals;
        case 'exitExternal':
            return externals.map(external => {
                if(external.member_id === action.params.member_id){
                    external = {...external,...action.params};
                }
                return external;
            });
        case 'delExternal':
            return externals.filter(externals => externals.member_id !== action.member_id);
        default :
            return externals
    }
}
function curMember(curMember, action) {
    switch (action.type){
        case 'changeCur':
            return {...curMember,...action.param};
        default:
            return [
                {
                    member_id:1,
                    member_name:'梨花',
                    phone:[1234567]
                }
            ]
    }
}
export default combineReducers({
    staffs,
    commons,
    externals,
    curMember
})