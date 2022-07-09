var app = new Vue({
    el: '#app',
    data: {
        activeMenuIndex:"Home",
        activeTabName:"2021",
        activeNewsName:"The-2nd-national-forum",
    },
    methods : {
        menuSelect: function (index, indexPath) {
            //显示当前路径
            console.log(index,indexPath)
            if(index == "userentrance"){
                return
            }
            //显示原始菜单索引地址
            console.log(this.activeMenuIndex)
            //origin原始地址#home，目的地址是由监听的点击事件，记录当前地址的索引地址，例如点击events，则会将#events地址赋值给destination目的地址
            let origin = "#" + this.activeMenuIndex
            let destination
            if(indexPath.length == 1)
                destination = "#" + index
            else
                destination = "#" + indexPath[1]

            $(origin).hide();
            $(destination).fadeIn();
            //将动态菜单索引地址改为当前地址
            this.activeMenuIndex = index
            console.log(this.activeMenuIndex)

        },
        newsJump(e){
            id = (e.target.id).replace("#","")
            $("#" + this.activeMenuIndex).hide()
            this.activeTabName = "2021"
            this.activeNewsName = id
            $("#" + "News").fadeIn()
            this.activeMenuIndex = "News"
        },
        // newsJump1(e){
        //     id = (e.target.id).replace("#","")
        //     console.log(id)
        //     $("#" + this.activeMenuIndex).hide()
        //     this.activeTabName = "2020"
        //     console.log(this.activeNewsName)
        //     this.activeNewsName = id
        //     console.log(this.activeNewsName)
        //     $("#" + "Events").fadeIn()
        //     this.activeMenuIndex = "News"
        // }
    }

})