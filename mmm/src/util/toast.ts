import { ElMessage } from "element-plus";

export const showMsg=(message:string)=>{
 ElMessage({
    showClose:true,
    message,
    type:'warning'
 });
};