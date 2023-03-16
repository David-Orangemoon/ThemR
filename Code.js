// ==UserScript==
// @name         Custom Discord Themes
// @namespace    https://discord.com/
// @version      0.1
// @description  Custom Discord Themes
// @author       ObviousAlexC
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// ==/UserScript==


(function() {

    function ThemR(scrollBar){
        //Config
        //Default colors  var backgroundcolors = ["#000044","#000022","#000033"]
        let backgroundcolors = {
            background1:"linear-gradient(45deg,#000022, black)",
            background2:"#000022",
            background3:"#000033",
            modifier1:"#000035",
            modifier2:"#000045",
            modifier3:"#000055",
            input:"#000011"
        }
        let textColors = {
            normal:"#00aaff",
            muted:"#0044aa",
            link:"#ffaa00",
            link_lowSat:"#ffaa44",
            positive:"#00ff00",
            warning:"#ffff00",
            danger:"#ff0000",
            brand:"#00ef0f",
            active_Interactive:"#00ccff",
            bright:"#00aaff"
        }
        let iconColor = "#00aaff"

        const MenuIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPGSURBVGhD7ZmBVdRAEIZPG5AOtAOxArACsQLoAKwAOpAOwArACsAKwArECsQKcL67DPw3md3kksDJe/zvfS/JsrvJ3M7szi6v7u7uZs9Zr5vrs9WLAevWlDGwYXwydpp7tN1c0WVzvTG4/27cUjBKGDCCDWPfuDKGiHa7RtZ3L9LCnhwaf4wpRD/0xw+SvavIEBfCLU6Md/OnZeEWuMf1/OnBbZC7E1fYmj8tC/f6bHj7bkWLOsBdom6MPSOr3wXtaB/FaGT1W6SFCQztiaEa8+ER+rk1VLwvq7tEWpgQP/7SWNlfO6C/c0PVaURaGDgyVKdGVm8zKStRq0v/Kt6f1ZuTFgo7hir7+HeGT6PMJrSJdRxcxWcu2tA2qxeNKNWrGsCQ6jTJ8Gb14rDTJqsH2h8q9Qna74WR1akaoK5DwJZ8nniIyupSFkXbWM+hvgZ2OmGUciHm+P3F7VwHRmnZ17ke/TCyupTxN1Vsq6I+73XtNtdlZVYZx4ar9is5jBb18N3SSAF/ow51D5qyLnQUWrGw9CD8MlzbRlbnqdCAbhmduRDu42nCX6M2zE+h8+aKNLudKzOAdNiljdcljSdP0++VGaBWqgE0JrDPDDVyKm0aJIlfDU0USfBcb5vrg6JPGTotqv8zF6v6BmEfWJlVxKBOBiptl47Am+aK3Hp+/eh/U45C7IsR8PfpaLSUGcBQutwA/JCAVmVz/VBlffm71YCfzfVemQEl6aLy2zha3E6iU0M/7pvhmxodeY2HhaJPGdeGKy4cPBMXtcVqDPQdM9Uzw9WKu6WHhlIQr4OYDbfS8MyF1B+rAfTIYuJgWnWRR7X2ypkB2Ub8qcV7LwxduDQGHxSHxMDPXbXc/jHYMuL2FRX33qVjFYbq/eJ29tGYIh/CHTm5Y5qOrslzyV2/GMeL20TRogai3VXcDa0AwRh3Y11iE9U5iaSFRtwNjZmNaNtXvJOtZO/jmtrJHAvV4eJ2voB8MIasvleGr+7MJCxa7QVp0Xf/EzlXtEhgFPTUjAUlq1dDkzT6yuqMopZK8Ivo1EXCVQ6mXBqYj7K36MqFeCmzgIv9APl6X6kBmiROp2xYEuJBE+7UJx+KAVw8oBpKWpjAx0Yj2HTUTuEcTQ7pI6szmLSwgq4PLtaJ2jSrgTz5yj7kHxwezHF/StATM6zaTJNsgJgW8X2mUkRZa2M+StGinuBSHGbFM/0u9TkkW4mx/6Xk19xr8NyppqnyqnuNNUDFlIl7kQpjGGCUH47hdpN+PJrSgLVolU39f6kXA9ar2ewfhxe7TWXdwAcAAAAASUVORK5CYII="

        const brandColor = "#0000ff"
        class customDiscordButton{
            constructor(Image,Text,CustomFunc){
                Text |= ""
                CustomFunc |= () => {
                    console.log("Custom button has no function!")
                }

                console.log("button Added!")
                this.Wrapper = document.createElement("div")
                this.Wrapper.className = "listItem-3SmSlK"

                this.innerWrapper = document.createElement("div")
                this.innerWrapper.className = "listItemWrapper-3d87LP"

                this.scaler = document.createElement("div")
                this.scaler.className = "wrapper-2PSQCG"

                this.Image = document.createElement("img")
                this.Image.src = Image
                this.Image.textContent = Text

                this.scaler.append(this.Image)

                this.innerWrapper.append(this.scaler)

                this.Wrapper.append(this.innerWrapper)

                scrollBar.append(this.Wrapper)

                this.Wrapper.onclick = CustomFunc
            }
        }

        function setRootProp(property,value)
        {
            document.documentElement.style.setProperty(property,value)
        }

        function setProp(property,value)
        {
            bodystyle.setProperty(property,value)
        }

        //script
        const body = document.body
        const bodystyle = body.style
        setProp("--background-primary",backgroundcolors.background1)
        setProp("--background-secondary",backgroundcolors.background2)
        setProp("--background-tertiary",backgroundcolors.background3)
        setProp("--background-secondary-alt",backgroundcolors.background1)
        setProp("--background-tertiary-alt",backgroundcolors.background2)
        setProp("--background-primary-alt",backgroundcolors.background3)
        setProp("--bg-overlay-1",backgroundcolors.modifier1)
        setProp("--bg-overlay-2",backgroundcolors.modifier2)
        setProp("--bg-overlay-3",backgroundcolors.modifier3)
        setProp("--modal-background",backgroundcolors.modifier1)
        setRootProp("--primary-630-hsl",backgroundcolors.background3)
        //buttons
        setProp("--button-primary-background",backgroundcolors.modifier1)
        setProp("--button-secondary-background",backgroundcolors.modifier2)
        setProp("--button-tertiary-background",backgroundcolors.modifier3)
        setProp("--input-background",backgroundcolors.modifier2)
        //setTextColors
        setProp("--text-normal",textColors.normal)
        setProp("--text-muted",textColors.muted)
        setProp("--text-link",textColors.link)
        setProp("--text-link-low-saturation",textColors.link_lowSat)
        setProp("--text-positive",textColors.positive)
        setProp("--text-warning",textColors.warning)
        setProp("--text-danger",textColors.danger)
        setProp("--text-brand",textColors.brand)
        setProp("--interactive-active",textColors.active_Interactive)
        setRootProp("--green-360",iconColor)
        setRootProp("--white-500",textColors.bright)
        setProp("--brand-experiment",brandColor)
        setRootProp("--brand-experiment",brandColor)

        //const testIcon = new customDiscordButton(MenuIcon,"", () => {
        //    console.log("Pressed")
        //})

    }

    var timer = setInterval(function() {
        if (!typeof document.getElementsByClassName("scroller-3X7KbA")[0] != undefined) {
            //run some other function
            ThemR(document.getElementsByClassName("scroller-3X7KbA")[0])
            clearInterval(timer)
        }
    }, 200)
})();
