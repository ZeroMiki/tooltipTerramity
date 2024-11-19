/*
简介:
为Terramity物品硬编码部分添加了中译

贡献者：
ZeroMiki

相关链接：
译者MCMOD主页：https://center.mcmod.cn/5560/
Terramity：https://www.curseforge.com/minecraft/mc-mods/terramity
KubeJS：https://kubejs.com/

使用方法：
安装KubeJS后将本文件置于~\kubejs\client_scripts下

声明：
本作采用CC BY-NC-SA 3.0协议，请遵循协议规范!

适用于：
terramity-0.9.6-forge-1.20.1

version:1.1
*/

/*
changelog
version:1.1.1 补充超级药丸汉化

version:1.1 添加0.9.6新物品及乐章的翻译，补齐了月钻炮和守护者魔典的翻译。

version:1.0
*/

//武器翻译
ItemEvents.tooltip(event=>{
event.addAdvanced("terramity:excalibur",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("英雄的武器献给勇士"))
        text.add(2,Text.blue(""))
    }
})

event.addAdvanced("terramity:simmeredge",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("炽热与速度的代表"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("攻击时："))
        text.add(4,Text.yellow(" -发射一块炽热的煤渣点燃敌人"))
        text.add(5,Text.blue(""))
    }
})

event.addAdvanced("terramity:icebrand",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("令人震惊的耐用"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("攻击时："))
        text.add(4,Text.yellow(" -发射一个冰块减速敌人"))
        text.add(5,Text.blue(""))
        
    }
})

event.addAdvanced("terramity:stratus_storm_ruler",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("云层的统帅"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("受击时："))
        text.add(4,Text.yellow(" -给敌人施加").append(Text.white("缓降")))
        text.add(5,Text.blue(""))
    }

})

event.addAdvanced("terramity:orders_end",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("支配虚空"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("受击时："))
        text.add(4,Text.yellow(" -拉近敌人"))
        text.add(5,Text.blue(""))
    }

})

event.addAdvanced("terramity:guiding_moonlight",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("“啊！原来你一直与我同在，我真正的导师……引导我的月光”"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("右击时："))
        text.add(4,Text.yellow(" -你的下一次攻击将释放一道穿甲的魔法波"))
        text.add(5,Text.blue(""))
    }

})

event.addAdvanced("terramity:crescent_moonblade",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("一把受到虚空奴仆青睐的武器"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("攻击时："))
        text.add(4,Text.yellow(" -释放一道可穿墙的黑暗波"))
        text.add(5,Text.blue(""))
    }

})

event.addAdvanced("terramity:hero_sword",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("一位传奇英雄所使用的充满力量的大剑"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("攻击时："))
        text.add(4,Text.yellow(" -满血时释放一道甚至可以穿过基岩的能量波"))
        text.add(5,Text.blue(""))
    }

})

event.addAdvanced("terramity:murasama",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("“血色将至！”"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("右击时："))
        text.add(4,Text.yellow(" -迅速地向前斩击，使沿途的敌人受到伤害"))
        text.add(5,Text.blue(""))
    }

})

event.addAdvanced("terramity:sword_of_the_imprisoned",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("“秘石？魔王？”"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("右击时："))
        text.add(4,Text.yellow(" -召唤雷电加强自己，下次攻击时斩出一道炽热的熔岩波"))
        text.add(5,Text.blue(""))
    }

})

event.addAdvanced("terramity:axe_of_unholy_divinity",(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.lightPurple("毁灭之神曾用过的武器"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("右击时："))
        text.add(4,Text.yellow(" -释放一道能造成巨量伤害的冲击波并为敌人施加").append(Text.white("脆弱")))
        text.add(5,Text.blue(""))
    }

})

event.addAdvanced("terramity:unholy_lance",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.gold("投掷时："))
        text.add(2,Text.yellow(" -将其投向主世界的天空，刺穿天堂并唤起其怒火"))
        text.add(3,Text.blue(""))
    }

})

event.addAdvanced('terramity:hamstick_cudgel',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.gold("增加你所造成的伤害（加算）"))
        text.add(2,Text.gold("数值等于四分之一乘以你的饱和度"))
        text.add(3,Text.blue(""))
    }

})

event.addAdvanced('terramity:elite_rifle',(item,advanced,text)=>{
    text.add(1,Text.gray("击杀精英骷髅掉落"))
})
})

//盔甲翻译
ItemEvents.tooltip(event=>{
event.addAdvanced(['terramity:sapphire_armor_helmet','terramity:sapphire_armor_chestplate','terramity:sapphire_armor_leggings','terramity:sapphire_armor_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,[Text.of(" -获得持续30s的").yellow(),Text.of(" 水下呼吸 ").aqua()])
    text.add(3,Text.darkAqua(" -冷却时间：120s"))
    }

})

event.addAdvanced(['terramity:topaz_armor_helmet','terramity:topaz_armor_chestplate','terramity:topaz_armor_leggings','terramity:topaz_armor_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,[Text.of(" -获得持续8s的").yellow(),Text.of(" 缓降 ").white()])
    text.add(3,Text.darkAqua(" -冷却时间：30s"))
    }

})

event.addAdvanced(['terramity:onyx_armor_helmet','terramity:onyx_armor_chestplate','terramity:onyx_armor_leggings','terramity:onyx_armor_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,Text.of(" -进行一次随机传送，类似于食用紫颂果").yellow())
    text.add(3,Text.darkAqua(" -冷却时间：30s"))
    }

})

event.addAdvanced(['terramity:ruby_armor_helmet','terramity:ruby_armor_chestplate','terramity:ruby_armor_leggings','terramity:ruby_armor_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,[Text.of(" -获得持续10s的").yellow(),Text.of(" 防火 ").white()])
    text.add(3,Text.darkAqua(" -冷却时间：120s"))
    }

})

event.addAdvanced(['terramity:dimlite_helmet','terramity:dimlite_chestplate','terramity:dimlite_leggings','terramity:dimlite_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,Text.of(" -产生一次造成8点伤害的爆炸并使玩家后退数格。").yellow())
    text.add(3,Text.darkAqua(" -冷却时间：8s"))
    }

})

event.addAdvanced(['terramity:virentium_armor_helmet','terramity:virentium_armor_chestplate','terramity:virentium_armor_leggings','terramity:virentium_armor_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,[Text.of(" -获得").yellow(),Text.of(" 垂滴叶步 ").green(),Text.of("Buff，在你脚下放置一个临时的垂滴叶").yellow()])
    }

})

event.addAdvanced(['terramity:cosmilite_armor_helmet','terramity:cosmilite_armor_chestplate','terramity:cosmilite_armor_leggings','terramity:cosmilite_armor_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,Text.of(" -反转你的重力").yellow())
    }

})

event.addAdvanced(['terramity:void_mage_helmet','terramity:void_mage_chestplate','terramity:void_mage_leggings','terramity:void_mage_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,[Text.of(" -获得持续5s的").yellow(),Text.of(" 相位 ").darkPurple()])
    text.add(3,Text.darkAqua(" -冷却时间：60s"))
    }

})

event.addAdvanced('terramity:conductite_scouter_helmet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -显示你所注视生物的生命值"))
        text.add(3,Text.gray("（覆盖层可在配置文件中修改）"))
        text.add(4,Text.gold("套装主动技能："))
        text.add(5,Text.yellow(" -恢复出厂设置：清除所有效果"))
        text.add(6,Text.darkAqua(" -冷却时间：180s"))
    }

})

event.addAdvanced(['terramity:conductite_armor_chestplate','terramity:conductite_armor_leggings','terramity:conductite_armor_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("套装主动技能："))
        text.add(2,Text.yellow(" -恢复出厂设置：清除所有效果"))
        text.add(3,Text.darkAqua(" -冷却时间：180s"))
    }

})

event.addAdvanced(['terramity:hellspec_helmet','terramity:hellspec_chestplate','terramity:hellspec_leggings','terramity:hellspec_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("套装主动技能："))
        text.add(2,[Text.of(" -获得持续25s的").yellow(),Text.of(" 生命窃取 ").red()])
        text.add(3,Text.darkAqua(" -冷却时间：60s"))
    }

})

event.addAdvanced(['terramity:nyxium_knight_helmet','terramity:nyxium_knight_chestplate','terramity:nyxium_knight_leggings','terramity:nyxium_knight_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,[Text.of(" -在脚下生成一个影焰环，使环内生物受到").yellow(),Text.of(" 影焰 ").lightPurple()])
    text.add(3,Text.darkAqua(" -冷却时间：45s"))
    text.add(4,Text.gold("被动效果（装备完整套装时生效）："))
    text.add(5,[Text.of(" -免疫着火和").yellow(),Text.of("影焰").lightPurple()])
    text.add(6,Text.blue(" -20% 主动技能冷却"))
    }

})

event.addAdvanced(['terramity:exodium_warlock_helmet','terramity:exodium_warlock_chestplate','terramity:exodium_warlock_leggings','terramity:exodium_warlock_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,[Text.of(" -获得").yellow(),Text.of(" 影步 ").gray(),Text.of("Buff，").yellow()])
    text.add(3,Text.yellow("在你脚下放置一个隐形方块，使你能够在空中行走"))
    text.add(4,Text.gold("被动效果（装备完整套装时生效）："))
    text.add(5,Text.blue(" -20% 冲刺技能冷却"))
    }

})

event.addAdvanced(['terramity:reverium_paladin_helmet','terramity:reverium_paladin_chestplate','terramity:reverium_paladin_leggings','terramity:reverium_paladin_boots'],(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
    text.add(1,Text.gold("套装主动技能："))
    text.add(2,[Text.of(" -在你鼠标所指的地方投射一道光柱，造成伤害并使其内实体受到").yellow(),Text.of(" 脆弱 ").white()])
    }

})

event.addAdvanced('terramity:conjuror_helmet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +20% 对魔法、火焰和爆炸的伤害减免"))
    }

})

event.addAdvanced('terramity:conjuror_boots',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 速度II ").white()])
    }

})

event.addAdvanced('terramity:gundalfs_hat_helmet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -25% 主动技能冷却"))
    }

})
})

//工具翻译
ItemEvents.tooltip(event=>{
event.addAdvanced('terramity:dimlite_pickaxe',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.blue("可挖掘：铱矿矿石、恶魔矿石、炉渣和风化基岩黑物质矿石"))
    
})

event.addAdvanced('terramity:virentium_pickaxe',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.blue("可挖掘：铱矿矿石、恶魔矿石、炉渣和风化基岩黑物质矿石"))
    
})

event.addAdvanced('terramity:cosmilite_pickaxe',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.blue("可挖掘：铱矿矿石、恶魔矿石、炉渣和风化基岩黑物质矿石"))
    
})

event.addAdvanced('terramity:iridium_pickaxe',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.blue("可挖掘：铱矿矿石、恶魔矿石、炉渣和风化基岩黑物质矿石"))
    
})

event.addAdvanced('terramity:void_pickaxe',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.blue("可挖掘：炽炎矿石"))
    
})

event.addAdvanced('terramity:conductite_pickaxe',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.blue("可挖掘：炽炎矿石"))
    
})

event.addAdvanced('terramity:hellspec_pickaxe',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.blue("可挖掘：炽炎矿石"))
    
})
})

//饰品翻译
ItemEvents.tooltip(event=>{
event.addAdvanced('terramity:eyeglasses',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -免疫").yellow(),Text.of("致盲和黑暗").gray()])
        text.add(3,Text.blue(" +1 护甲值"))
    }
})

event.addAdvanced('terramity:eyepatch',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.blue("海盗信赖的眼罩"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("被动效果："))
        text.add(4,[Text.of(" -丢失左眼的视野").yellow()])
        text.add(5,Text.blue(" +1.33x 攻击伤害"))
    }
})

event.addAdvanced('terramity:scuba_gear',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 水下呼吸").blue()])
    }
})

event.addAdvanced('terramity:diamond_earrings',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +2 护甲值"))
    }
})

event.addAdvanced('terramity:swag_glasses',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +10% 攻击伤害"))
        text.add(3,Text.blue(" +10% 受伤减免"))
        text.add(4,Text.blue(" +2 最大生命值"))
    }
})

event.addAdvanced('terramity:ancient_stone_mask',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 生命窃取").red()])
        text.add(3,[Text.of(" -你将在日光下被").yellow(),Text.of(" 影焰 ").lightPurple(),Text.of("灼烧").yellow()])
    }
})

event.addAdvanced('terramity:cyber_glasses',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.green("这是特性不是作弊！"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("被动效果："))
        text.add(4,[Text.of(" -自动锁定7米内最近的实体").yellow()])
    }
})

event.addAdvanced('terramity:void_glasses',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -标记64米内你所注视的实体，使其").yellow(),Text.of(" 发光").white()])
    }
})

event.addAdvanced('terramity:archangel_halo',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续3s的").yellow(),Text.of(" 神性飞行").white()])
    }
})

event.addAdvanced('terramity:cardboard_necklace',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +击退距离"))
    }
})

event.addAdvanced('terramity:gold_necklace',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -猪灵将对你保持中立"))
    }
})

event.addAdvanced('terramity:diamond_pendant',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +3 护甲值"))
    }
})

event.addAdvanced('terramity:poisonguard_pendant',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -免疫中毒"))
    }
})

event.addAdvanced('terramity:honey_necklace',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +2 最大生命值"))
    }
})

event.addAdvanced('terramity:purity_pendant',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -免疫中毒"))
        text.add(3,Text.blue(" +4 最大生命值"))
    }
})

event.addAdvanced('terramity:holy_heart_necklace',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 免疫 ").white()])
        text.add(3,Text.blue(" +6 最大生命值"))
    }
})

event.addAdvanced('terramity:voidguard_pendant',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -使你完全免疫虚空伤害"))
    }
})

event.addAdvanced('terramity:flameguard_pendant',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -免疫 着火"))
    }
})

event.addAdvanced('terramity:steady_pendant',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -站立不动时每秒治愈你半颗心的生命值"))
    }
})

event.addAdvanced('terramity:lava_locket',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -站在火焰上时获得").yellow(),Text.of(" 生命恢复I ").lightPurple()])
        text.add(3,Text.yellow(" -免疫 着火"))
        text.add(4,Text.blue(" +2 最大生命值"))
    }
})

event.addAdvanced('terramity:solar_safeguard_pendant',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -站在火焰上时每秒治愈你半颗心的生命值"))
        text.add(3,Text.yellow(" -免疫 着火"))
        text.add(4,Text.yellow(" -使你完全免疫虚空伤害"))
        text.add(5,Text.blue(" +4 最大生命值"))
    }
})

event.addAdvanced('terramity:anxiety_amulet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -受伤时有20%几率进行一次随机传送，但会受到").yellow(),Text.of(" 中咒 ").red()])
    }
})

event.addAdvanced('terramity:blastguard_pendant',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -免疫爆炸伤害"))
    }
})

event.addAdvanced('terramity:exodium_shield_amulet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +25% 受伤减免"))
        text.add(3,Text.blue(" +0.8x 攻击伤害"))
    }
})

event.addAdvanced('terramity:rebound_scarf',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -受到攻击时，获得持续3s的").yellow(),Text.of(" 速度III ").aqua()])
    }
})

event.addAdvanced('terramity:stillness_scarf',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 缓慢II ").gray()])
        text.add(3,Text.blue(" 站立不动时：+50% 攻击伤害"))
    }
})

event.addAdvanced('terramity:focus_scarf',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -死亡后以半颗心的生命值复活"))
        text.add(3,Text.darkAqua(" -冷却时间：120s"))
    }
})

event.addAdvanced('terramity:seafarer_scarf',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -在水中时，获得").yellow(),Text.of("海豚的恩惠").white(),Text.of("、").yellow(),Text.of("水下呼吸").blue(),Text.of("和").yellow(),Text.of("夜视").green()])
    }
})

event.addAdvanced('terramity:prismatic_scarf',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +15% 受伤减免"))
    }
})

event.addAdvanced('terramity:all_seeing_scarf',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -使100格距离内所有实体获得").yellow(),Text.of(" 发光 ").white()])
        text.add(3,Text.darkAqua(" -冷却时间：120s"))
    }
})

event.addAdvanced('terramity:concealment_scarf',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 隐身 ").white()])
    }
})

event.addAdvanced('terramity:null_scarf',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续8s的").yellow(),Text.of(" 程序错误 ").lightPurple()])
        text.add(3,Text.darkAqua(" -冷却时间：120s"))
    }
})

event.addAdvanced('terramity:pearls_of_persephone',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.green("一串能将能量变为食物的珍珠项链"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("被动效果："))
        text.add(4,[Text.of(" -将经验等级转换为饥饿值，经验充足时将自动喂食").yellow()])
    }
})

event.addAdvanced('terramity:nyxs_necklace',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.green("一串能将能量变为食物的珍珠项链"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("被动效果："))
        text.add(4,[Text.of(" -将经验等级转换为饥饿值，经验充足时将自动喂食").yellow()])
        text.add(5,[Text.of(" -夜间获得").yellow(),Text.of(" 生命恢复 I ").lightPurple()])
        text.add(6,Text.blue(" +4 最大生命值"))
    }
})

event.addAdvanced('terramity:gold_medal',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.yellow("大喜！大喜！大喜！大喜……"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("被动效果："))
        text.add(4,Text.blue(" +10% 攻击伤害"))
        text.add(5,Text.blue(" +10% 受伤减免"))
        text.add(6,Text.blue(" +4 最大生命值"))
        text.add(7,Text.blue(" +增加最大行走高度"))
    }
})

event.addAdvanced('terramity:builder_mitts',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +4 方块交互距离"))
    }
})

event.addAdvanced('terramity:piston_cuffs',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +增加 击退距离"))
    }
})

event.addAdvanced('terramity:diamond_gauntlet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +2 护甲值"))
    }
})

event.addAdvanced('terramity:famine_gauntlet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +增加 攻击伤害（加算）"))
        text.add(3,Text.blue(" 增加的数值等于四分之一乘以你的饱和度"))
    }
})

event.addAdvanced('terramity:gauntlet_of_decay',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -攻击时，使敌人获得持续20s的").yellow(),Text.of(" 凋零 ").gray()])
    }
})

event.addAdvanced('terramity:gravity_gauntlet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -攻击时，15%几率使敌人获得").yellow(),Text.of(" 漂浮 ").white()])
    }
})

event.addAdvanced('terramity:experience_sapping_gauntlet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -击杀时掉落一个额外的经验球"))
        text.add(3,Text.yellow(" -该经验球等值于原始经验的两倍"))
        text.add(4,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:divergency_gauntlet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续15s的").yellow(),Text.of(" 分歧 ").aqua()])
        text.add(3,Text.darkAqua(" -冷却时间：60s"))
    }
})

event.addAdvanced('terramity:hellrok_gauntlet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续10s的").yellow(),Text.of(" 兴奋 ").aqua()])
        text.add(3,Text.darkAqua(" -冷却时间：35s"))
    }
})

event.addAdvanced('terramity:prismatic_gauntlet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -造成伤害时恢复一颗心的生命值"))
        text.add(3,Text.darkAqua(" -冷却时间：5s"))
    }
})

event.addAdvanced('terramity:lava_gauntlet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -敌人着火时：+33% 攻击伤害"))
    }
})

event.addAdvanced('terramity:malware',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.lightPurple("多人游戏专属"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("被动效果："))
        text.add(4,Text.yellow(" -禁用你周围玩家的主动技能与冲刺技能"))
    }
})

event.addAdvanced('terramity:power_bracelets',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续5s的").yellow(),Text.of(" 力量II ").red()])
        text.add(3,Text.darkAqua(" -冷却时间：60s"))
    }
})

event.addAdvanced('terramity:poker_chip_bracelets',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -任意攻击都有几率").yellow(),Text.of(" 掷骰重击 ").blue()])
        text.add(3,[Text.of(" -").yellow(),Text.of("掷骰重击：").blue(),Text.of("造成1.66x 攻击伤害，基础几率为15%").yellow()])
        text.add(4,[Text.of(" -每级").yellow(),Text.of("幸运").green(),Text.of("提高5% 几率").yellow()])
    }
})

event.addAdvanced('terramity:chthonic_curse_bracelets',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得持续时间无限的").yellow(),Text.of(" 分歧 ").aqua()])
        text.add(3,Text.blue(" -35% 攻击伤害"))
    }
})

event.addAdvanced('terramity:electron_bracelets',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +增加 攻击速度"))
    }
})

event.addAdvanced('terramity:malediction_bracelets',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -每次击杀时：-25%冷却时间"))
    }
})

event.addAdvanced('terramity:exodium_twin_bracelets',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +1.2x 攻击伤害"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:giant_sniffers_hoof',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" +2x 攻击伤害").yellow(),Text.of("（持续时间：5s）").gray()])
        text.add(3,Text.darkAqua(" -冷却时间：35s"))
    }
})

event.addAdvanced('terramity:guardians_hand',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +1 方块和实体交互距离"))
    }
})

event.addAdvanced('terramity:terawatt_bracers',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -任意攻击都有15%几率召唤雷击").yellow()])
        text.add(3,[Text.of(" -每级").yellow(),Text.of(" 幸运 ").green(),Text.of("提高5%几率").yellow()])
    }
})

event.addAdvanced('terramity:diamond_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +2 护甲值"))
    }
})

event.addAdvanced('terramity:sapphire_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -在水中或雨中时：获得").yellow(),Text.of(" 力量I ").red()])
    }
})

event.addAdvanced('terramity:sapphire_ring_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -在水中或雨中时：获得").yellow(),Text.of(" 力量II ").red()])
    }
})

event.addAdvanced('terramity:ruby_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -在火中时：获得").yellow(),Text.of(" 力量I ").red()])
    }
})

event.addAdvanced('terramity:ruby_ring_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -在火中时：获得").yellow(),Text.of(" 力量II ").red()])
    }
})

event.addAdvanced('terramity:leap_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 跳跃提升I ").green()])
    }
})

event.addAdvanced('terramity:leap_ring_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 跳跃提升II ").green()])
    }
})

event.addAdvanced('terramity:excavation_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 急迫I ").white()])
    }
})

event.addAdvanced('terramity:supercharged_speed_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 速度II ").aqua()])
        text.add(3,[Text.of(" -获得").yellow(),Text.of(" 急迫II ").white()])
    }
})

event.addAdvanced('terramity:ring_of_luck',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 幸运I ").green()])
    }
})

event.addAdvanced('terramity:ring_of_luck_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 幸运II ").green()])
    }
})

event.addAdvanced('terramity:gamblers_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 幸运III ").green()])
    }
})

event.addAdvanced('terramity:rush_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 速度I ").aqua()])
    }
})

event.addAdvanced('terramity:rush_ring_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 速度II ").aqua()])
    }
})

event.addAdvanced('terramity:express_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 速度I ").aqua()])
        text.add(3,[Text.of(" -获得").yellow(),Text.of(" 跳跃提升II ").green()])
        text.add(4,[Text.of(" -获得").yellow(),Text.of(" 急迫I ").white()])
    }
})

event.addAdvanced('terramity:ring_of_rejuvenation',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -低于25%最大生命值时：获得持续5s的").yellow(),Text.of(" 生命恢复I ").lightPurple()])
    }
})

event.addAdvanced('terramity:ring_of_rejuvenation_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -低于50%最大生命值时：获得持续5s的").yellow(),Text.of(" 生命恢复I ").lightPurple()])
    }
})

event.addAdvanced('terramity:life_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +2 最大生命值"))
    }
})

event.addAdvanced('terramity:life_ring_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +4 最大生命值"))
    }
})

event.addAdvanced('terramity:chaos_heart_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +6 最大生命值"))
        text.add(3,Text.gold("主动技能："))
        text.add(4,[Text.of(" -传送至30s内你最后一次攻击实体的地方").yellow()])
        text.add(5,Text.darkAqua(" -冷却时间：66s"))
    }
})

event.addAdvanced('terramity:glass_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -在你遭受致命一击时破碎，并为你恢复半颗心的生命值"))
    }
})

event.addAdvanced('terramity:daemonium_glass_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -在你遭受致命一击时破碎，并为你恢复半颗心的生命值（可使用两次）"))
    }
})

event.addAdvanced('terramity:band_of_power',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +15% 攻击伤害"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:band_of_power_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +25% 攻击伤害"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:tearstone_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +50% 攻击伤害，低于25%最大生命值时"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:gnome_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 急迫III ").white()])
        text.add(3,Text.blue(" -20% 攻击伤害"))
        text.add(4,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:burning_spirit_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 急迫I ").white()])
        text.add(3,Text.gold("主动技能："))
        text.add(4,[Text.of(" -获得持续15s的").yellow(),Text.of(" 急迫IV ").white(),Text.of("Buff并使你着火").yellow()])
        text.add(5,Text.darkAqua(" -冷却时间：45s"))
    }
})

event.addAdvanced('terramity:agility_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -25% 冲刺技能冷却"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:prismatic_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -25% 主动技能冷却"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:rainbow_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -30% 主动技能冷却"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:xp_remedy_ring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -拾取经验球时，恢复半颗心的生命值"))
    }
})

event.addAdvanced('terramity:band_of_drifting',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 缓降I ").white()])
    }
})

event.addAdvanced('terramity:leather_belt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +2 护甲值"))
    }
})

event.addAdvanced('terramity:diamond_studded_belt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +4 护甲值"))
    }
})

event.addAdvanced('terramity:slam_belt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -使你获得速降的能力，这将推动你向下并免除摔落伤害"))
        text.add(3,Text.gray("（默认键位：C）"))
    }
})

event.addAdvanced('terramity:anti_gravity_belt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -减小重力"))
        text.add(3,Text.blue(" +增加最大行走高度"))
    }
})

event.addAdvanced('terramity:asteroid_belt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -减小重力"))
        text.add(3,Text.blue(" +增加最大行走高度"))
        text.add(4,Text.yellow(" -使你获得速降的能力，这将推动你向下并免除摔落伤害"))
        text.add(5,Text.gray("（默认键位：C）"))
    }
})

event.addAdvanced('terramity:kuiper_belt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -显著减小重力"))
        text.add(3,Text.blue(" +增加最大行走高度"))
        text.add(4,Text.yellow(" -使你获得速降的能力，这将推动你向下并免除摔落伤害"))
        text.add(5,Text.gray("（默认键位：C）"))
        text.add(6,Text.gold("冲刺技能："))
        text.add(7,Text.yellow(" -进行强力冲刺"))
        text.add(8,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:sarashi',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -进行冲刺"))
        text.add(3,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:swordsmans_sarashi',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -进行冲刺"))
        text.add(3,Text.gray("（默认键位：V）"))
        text.add(4,Text.gold("被动效果："))
        text.add(5,Text.blue(" +2 近战伤害"))
    }
})

event.addAdvanced('terramity:inverse_sarashi',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -进行向后冲刺"))
        text.add(3,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:prismatic_sarashi',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -进行冲刺并恢复半颗心的生命值"))
        text.add(3,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:belt_of_the_gnome_king',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -进行强力冲刺并使你跃入空中"))
        text.add(3,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:flameburst_belt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -进行冲刺"))
        text.add(3,Text.yellow(" -在原地爆发火球并使你周围充斥火焰"))
        text.add(4,Text.yellow(" -被火球击中的敌人将受到巨额伤害"))
        text.add(5,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:hurricane_belt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -进行猛烈冲刺"))
        text.add(3,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:shinobi_sash',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -15%几率免疫所受伤害并获得持续2s的").yellow(),Text.of("隐身").white(),Text.of("和").yellow(),Text.of("速度IV").aqua()])
    }
})

event.addAdvanced('terramity:sacrificial_sash',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -向你所注视的方向传送一段距离"))
        text.add(3,Text.yellow(" -每次使用都将受到2颗心的伤害"))
        text.add(4,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:blink_belt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -向你所注视的方向传送一小段距离"))
        text.add(3,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:shadowflame_sash',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -向你所注视的方向传送一段距离"))
        text.add(3,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:hubris_of_icarus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,[Text.of(" -获得持续10s的").yellow(),Text.of(" 神性飞行 ").white()])
        text.add(3,Text.yellow(" -效果结束时如果仍处于空中将会受到惩罚"))
        text.add(4,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:fragile_divinity',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得持续时间无限的").yellow(),Text.of(" 神性飞行 ").white()])
        text.add(3,Text.yellow(" -受到任意伤害将直接死亡"))
    }
})

event.addAdvanced('terramity:super_sniffers_pelt',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("冲刺技能："))
        text.add(2,Text.yellow(" -传送至你所注视的实体身后，无视距离"))
        text.add(3,Text.gray("（默认键位：V）"))
    }
})

event.addAdvanced('terramity:adrenaline_tablets',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续15s的").yellow(),Text.of("速度I").aqua(),Text.of("和").yellow(),Text.of("急迫I").white()])
        text.add(3,Text.darkAqua(" -冷却时间：60s"))
    }
})

event.addAdvanced('terramity:melatonin_gummies',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续10s的").yellow(),Text.of("生命恢复I").lightPurple(),Text.of("和").yellow(),Text.of("致盲").gray()])
        text.add(3,Text.darkAqua(" -冷却时间：45s"))
    }
})

event.addAdvanced('terramity:morphine_pills',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续15s的").yellow(),Text.of("伤害吸收II").yellow(),Text.of("和").yellow(),Text.of("虚弱I").gray()])
        text.add(3,Text.darkAqua(" -冷却时间：45s"))
    }
})

event.addAdvanced('terramity:ibuprofen_capsules',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续12s的").yellow(),Text.of("免疫").white()])
        text.add(3,Text.darkAqua(" -冷却时间：40s"))
    }
})

event.addAdvanced('terramity:fermented_apple_cider',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续10s的").yellow(),Text.of("兴奋").white()])
        text.add(3,[Text.of(" -兴奋效果结束后获得持续10s的").yellow(),Text.of("眩晕").darkRed()])
        text.add(4,Text.darkAqua(" -冷却时间：60s"))
    }
})

event.addAdvanced('terramity:spring',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 跳跃提升III").green()])
        text.add(3,Text.blue(" +增加最大行走高度"))
    }
})

event.addAdvanced('terramity:ball_n_chain',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -显著降低移动速度").yellow()])
        text.add(3,Text.blue(" +4 护甲值"))
        text.add(4,Text.blue(" +4 击退距离"))
    }
})

event.addAdvanced('terramity:bomb_charm',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -受伤时产生爆炸，伤害周围的敌人").yellow()])
        text.add(3,Text.gray("（不会破坏环境）"))
    }
})

event.addAdvanced('terramity:steel_shell',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +10% 受伤减免"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:dr_binty',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" +显著提升移动速度").blue()])
    }
})

event.addAdvanced('terramity:phantom_amulet',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -标记10格内所有实体，使其").yellow(),Text.of(" 发光").white()])
    }
})

event.addAdvanced('terramity:cardboard_pop_up_fort',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.aqua("美梦成真"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("主动技能："))
        text.add(4,Text.of(" -在你所处的地方生成纸板堡垒，一段时间后消失").yellow())
        text.add(5,Text.darkAqua(" -冷却时间：45s"))
    }
})

event.addAdvanced('terramity:shinobis_substitute',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.green("最聪明的怪物也将被这段惊人的原木愚弄"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("主动技能："))
        text.add(4,Text.of(" -留下一段木头吸引敌对生物").yellow())
        text.add(5,Text.gray("（持续时间：10s）"))
        text.add(6,[Text.of(" -获得持续3s的").yellow(),Text.of(" 隐身").white()])
        text.add(7,Text.darkAqua(" -冷却时间：45s"))
    }
})

event.addAdvanced('terramity:radiant_honey',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +2 最大生命值"))
    }
})

event.addAdvanced('terramity:celestial_brew',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +4 最大生命值"))
    }
})

event.addAdvanced('terramity:ambrosia',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +8 最大生命值"))
    }
})

event.addAdvanced('terramity:chthonic_nectar',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.red("来自幽冥虚空的力量"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("被动效果："))
        text.add(4,Text.of(" -在你死亡时清除背包中除了饰品以外的物品，即使你使用了复活物品").yellow())
        text.add(5,Text.of(" -你将无法使用仙灵之瓶复活").yellow())
        text.add(6,Text.blue(" +10 最大生命值"))
        text.add(7,Text.gray("（开启死亡不掉落后该效果也会生效）"))
    }
})

event.addAdvanced('terramity:pot_of_hot_coals',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -攻击时：点燃敌人4s"))
    }
})

event.addAdvanced('terramity:acidic_ampoule',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -攻击时：使敌人获得持续6s的").yellow(),Text.of(" 中毒II").green()])
    }
})

event.addAdvanced('terramity:eternal_shadowflame',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -攻击时：使敌人获得持续10s的").yellow(),Text.of(" 影焰").lightPurple()])
    }
})

event.addAdvanced('terramity:carton_of_milk',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -免疫").yellow(),Text.of("饥饿").green(),Text.of("和").yellow(),Text.of("虚弱").gray()])
    }
})

event.addAdvanced('terramity:carton_of_chocolate_milk',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -免疫").yellow(),Text.of("饥饿").green(),Text.of("和").yellow(),Text.of("虚弱").gray()])
        text.add(3,Text.blue(" +适中提升移动速度"))
        text.add(4,Text.blue(" -2 最大生命值"))
    }
})

event.addAdvanced('terramity:carton_of_sweetberry_milk',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -免疫").yellow(),Text.of("饥饿").green(),Text.of("和").yellow(),Text.of("虚弱").gray()])
        text.add(3,Text.blue(" +大额提升移动速度"))
        text.add(4,Text.blue(" -4 最大生命值"))
    }
})

event.addAdvanced('terramity:carton_of_glowberry_milk',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -免疫").yellow(),Text.of("饥饿").green(),Text.of("、").yellow(),Text.of("虚弱").gray(),Text.of("和").yellow(),Text.of("发光").white()])
        text.add(3,Text.blue(" +巨额提升移动速度"))
        text.add(4,Text.blue(" -4 最大生命值"))
    }
})

event.addAdvanced('terramity:ultrabright_ink_sac',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得").yellow(),Text.of(" 夜视").white()])
    }
})

event.addAdvanced('terramity:extremely_thick_oil',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -湿润时获得").yellow(),Text.of(" 漂浮").white()])
    }
})

event.addAdvanced('terramity:flippers',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -在水中时获得").yellow(),Text.of(" 海豚的恩惠").white()])
    }
})

event.addAdvanced('terramity:gilded_feather',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -50% 摔落伤害").blue()])
    }
})

event.addAdvanced('terramity:prismatic_feather',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -免疫摔落伤害").yellow()])
    }
})

event.addAdvanced('terramity:holy_chalice',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -50% 来自亡灵生物的伤害").blue()])
    }
})

event.addAdvanced('terramity:forbidden_chalice',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -免疫来自亡灵生物的伤害").blue()])
        text.add(3,[Text.of(" +500% 其它任意来源伤害").blue()])
    }
})

event.addAdvanced('terramity:ammo_box',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +15% 几率装弹时不消耗弹药（每发独立计算）"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:bottomless_ammo_box',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +25% 几率装弹时不消耗弹药（每发独立计算）"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:projectile_defense_talisman',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -25% 弹射物伤害"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:crest_of_the_void',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" +25% 几率受到弹射物伤害时免疫该次伤害并随机传送"))
    }
})

event.addAdvanced('terramity:crystal_heart',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.green("一颗充斥着魔法能量的水晶之心"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("主动技能："))
        text.add(4,[Text.of(" -生成一个持续8.5s的魔法圈为其中生物提供").yellow(),Text.of("生命恢复II").lightPurple()])
        text.add(5,Text.darkAqua(" -冷却时间：45s"))
    }
})

event.addAdvanced('terramity:gaias_grace',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -生成一个魔法圈加速其中作物的生长").yellow()])
        text.add(3,Text.darkAqua(" -冷却时间：60s"))
    }
})

event.addAdvanced('terramity:forbidden_fruit',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -不再需要进食，但仅保留1点饱食度以抑制生命恢复"))
        text.add(3,Text.gold("脱下时："))
        text.add(4,Text.yellow(" -失去一半生命值"))
    }
})

event.addAdvanced('terramity:cloud_in_a_bottle',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -获得二段跳的能力"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:hurricane_in_a_jar',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -获得三段跳的能力"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:amp_shield',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续30s的").yellow(),Text.of("伤害吸收II").white()])
        text.add(3,[Text.of(" -获得持续5s的").yellow(),Text.of("抗性提升I").aqua()])
        text.add(4,Text.darkAqua(" -冷却时间：45s"))
    }
})

event.addAdvanced('terramity:headhunter_talisman',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +25% 攻击伤害，与目标距离20格以上时"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:headhunter_talisman_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +35% 攻击伤害，与目标距离20格以上时"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:proximity_badge',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.aqua("近胜远败"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("被动效果："))
        text.add(4,Text.blue(" +1.5x 攻击伤害（<3m）"))
        text.add(5,Text.blue(" +1.66x 承受伤害（>3m）"))
        text.add(6,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:chthonic_shell_casing',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.red("远胜近败"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("被动效果："))
        text.add(4,Text.blue(" +1.3x 攻击伤害（>3m）"))
        text.add(5,Text.blue(" +1.6x 承受伤害（<3m）"))
        text.add(6,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:chthonic_cursemark',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +1.5x 攻击伤害"))
        text.add(3,Text.blue(" +2.0x 承受伤害"))
        text.add(4,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:hover_charm',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -潜行时轻微漂浮"))
    }
})

event.addAdvanced('terramity:hover_charm_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -潜行时适中漂浮"))
    }
})

event.addAdvanced('terramity:hover_charm_plus_plus',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" -潜行时显著漂浮"))
    }
})

event.addAdvanced('terramity:anvil_talisman',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.yellow(" -摔落速度越快，攻击伤害越高"))
        text.add(3,Text.yellow(" -造成伤害时免疫摔落伤害"))
        text.add(4,Text.yellow(" -最高提升100% 攻击伤害"))
        text.add(5,Text.yellow(" -猛推腰带不会影响攻击伤害"))
        text.add(6,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:sharpening_stone',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +1.15x 近战伤害"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:magma_stone',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +1.2x 近战伤害"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:shadowflame_stone',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,Text.blue(" +1.3x 近战伤害"))
        text.add(3,Text.darkRed("无法叠加生效"))
    }
})

event.addAdvanced('terramity:fateful_coin',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -你造成或承受的任意攻击都有几率").yellow(),Text.of(" 投币重击 ").white()])
        text.add(3,[Text.of(" -").yellow(),Text.of("投币重击：").white(),Text.of("造成1.5x 攻击伤害，几率为50%").yellow()])
    }
})

event.addAdvanced('terramity:stygian_safety_talisman',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -免疫").yellow(),Text.of(" 中咒").darkRed()])
    }
})

event.addAdvanced('terramity:lucky_dice',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -任意攻击都有几率").yellow(),Text.of(" 真实重击 ").red()])
        text.add(3,[Text.of(" -").yellow(),Text.of("真实重击：").red(),Text.of("造成1.66x 攻击伤害，基础几率为20%").yellow()])
        text.add(4,[Text.of(" -每级").yellow(),Text.of("幸运").green(),Text.of("提高10% 几率").yellow()])
    }
})

event.addAdvanced('terramity:die_of_revival',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -死亡时有30% 几率以两颗心的生命值复活").yellow()])
        text.add(3,[Text.of(" -每级").yellow(),Text.of("幸运").green(),Text.of("提高10% 几率").yellow()])
    }
})

event.addAdvanced('terramity:devils_dice',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -掷骰，50% 几率获得正面Buff，50% 几率获得负面Buff").yellow()])
        text.add(3,[Text.of(" -每级").yellow(),Text.of("幸运").green(),Text.of("提高10% 几率额外获得一个Buff").yellow()])
    }
})

event.addAdvanced('terramity:nullifying_dice',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -有10% 的基础几率免疫一次伤害").yellow()])
        text.add(3,[Text.of(" -每级").yellow(),Text.of("幸运").green(),Text.of("提高5% 几率").yellow()])
        text.add(4,Text.gray("（上限为：66%）"))
    }
})

event.addAdvanced('terramity:weighted_die',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -获得持续6s的").yellow(),Text.of("幸运X").green()])
        text.add(3,Text.darkAqua(" -冷却时间：66s"))
    }
})

event.addAdvanced('terramity:analeptic_amphora',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -恢复6颗心的生命值").yellow()])
        text.add(3,Text.darkAqua(" -冷却时间：45s"))
    }
})

event.addAdvanced('terramity:energized_core',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -50% 爆炸伤害").blue()])
        text.add(3,Text.gold("主动技能："))
        text.add(4,[Text.of(" -引发一次大爆炸，并使周围敌人").yellow(),Text.of("中咒").darkRed()])
        text.add(5,Text.darkAqua(" -冷却时间：30s"))
    }
})

event.addAdvanced('terramity:ethereal_eclipse_emblem',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("主动技能："))
        text.add(2,[Text.of(" -免疫伤害并随机传送使用者").yellow()])
        text.add(3,Text.darkAqua(" -冷却时间：60s"))
    }
})

event.addAdvanced('terramity:neutron_star',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -获得无限击退抗性").yellow()])
    }
})

event.addAdvanced('terramity:antimatter_pacemaker',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("被动效果："))
        text.add(2,[Text.of(" -完全死亡时丢下一颗反物质炸弹").yellow()])
    }
})

event.addAdvanced('terramity:pocket_universe',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.lightPurple("创造模式专属（实验性物品）"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("主动技能："))
        text.add(4,[Text.of(" -获得持续5s的").yellow(),Text.of("普适性超验").white()])
        text.add(5,Text.of(" -使你难以辨认，开启飞行并可以穿过墙壁").yellow())
        text.add(6,Text.darkAqua(" -冷却时间：35s"))
    }
})

event.addAdvanced('terramity:the_pill',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("主动技能："))
        text.add(4,[Text.of(" -获得持续20s的").yellow(),Text.of("速度II、").white(),Text.of("急迫II、").white(),Text.of("伤害吸收II、").yellow(),Text.of("力量II、").red(),Text.of("生命恢复II、").lightPurple(),Text.of("和").yellow(),Text.of("免疫").white()])
        text.add(5,Text.darkAqua(" -冷却时间：60s"))
    }
})
})

//乐章翻译
ItemEvents.tooltip(event=>{
event.addAdvanced('terramity:music_sheet_of_power',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续30s的").gray(),Text.of("力量II").red()])
})

event.addAdvanced('terramity:music_sheet_of_tempo',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续60s的").gray(),Text.of("速度I").aqua()])
})

event.addAdvanced('terramity:music_sheet_of_perception',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续180s的").gray(),Text.of("夜视").white()])
})

event.addAdvanced('terramity:music_sheet_of_prosperity',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续60s的").gray(),Text.of("村庄英雄").green()])
})

event.addAdvanced('terramity:music_sheet_of_good_fortune',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续60s的").gray(),Text.of("幸运II").green()])
})

event.addAdvanced('terramity:music_sheet_of_vampirism',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续30s的").gray(),Text.of("生命窃取").red()])
})

event.addAdvanced('terramity:music_sheet_of_resilience',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续60s的").gray(),Text.of("生命提升III").red()])
})

event.addAdvanced('terramity:music_sheet_of_the_indomitable',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续60s的").gray(),Text.of("免疫").white()])
})

event.addAdvanced('terramity:music_sheet_of_defense',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续15s的").gray(),Text.of("抗性提升I").aqua()])
})

event.addAdvanced('terramity:music_sheet_of_incombustibility',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续120s的").gray(),Text.of("抗火").gold()])
})

event.addAdvanced('terramity:music_sheet_of_rejuvenation',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续30s的").gray(),Text.of("生命恢复I").lightPurple()])
})

event.addAdvanced('terramity:music_sheet_of_daedalus',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续120s的").gray(),Text.of("凡性飞行").white()])
})

event.addAdvanced('terramity:music_sheet_of_oceanus',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续60s的").gray(),Text.of("水下呼吸").blue(),Text.of("和").gray(),Text.of("海豚的恩惠").white()])
})

event.addAdvanced('terramity:music_sheet_of_resourcefulness',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续60s的").gray(),Text.of("节弹").green()])
})

event.addAdvanced('terramity:music_sheet_of_the_aegis',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续30s的").gray(),Text.of("伤害吸收III").yellow()])
})

event.addAdvanced('terramity:music_sheet_of_ghosts',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续120s的").gray(),Text.of("隐身").white()])
})

event.addAdvanced('terramity:music_sheet_of_null',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续15s的").gray(),Text.of("程序错误").lightPurple()])
})

event.addAdvanced('terramity:music_sheet_of_weakness',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -向周围生物施加持续30s的").gray(),Text.of("虚弱II").darkGray()])
})

event.addAdvanced('terramity:music_sheet_of_debilitation',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -向周围生物施加持续30s的").gray(),Text.of("脆弱").white()])
})

event.addAdvanced('terramity:music_sheet_of_levitation',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -向周围生物施加持续5s的").gray(),Text.of("漂浮").white()])
})

event.addAdvanced('terramity:music_sheet_of_life',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -向你和周围生物施加").gray(),Text.of("瞬间治疗II").red()])
})

event.addAdvanced('terramity:music_sheet_of_destruction',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -向周围生物施加").gray(),Text.of("瞬间伤害II").red()])
})

event.addAdvanced('terramity:music_sheet_of_everlasting',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -增加1.5x乐章效果持续时间（无法与自身叠加）").gray()])
})

event.addAdvanced('terramity:music_sheet_of_bolstering',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -增加1级乐章效果等级（无法与自身叠加）").gray()])
})

event.addAdvanced('terramity:music_sheet_of_cleansing',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -净化所有效果").gray()])
})

event.addAdvanced('terramity:music_sheet_of_untimely_death',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -使用者立即死亡").gray()])
})

event.addAdvanced('terramity:music_sheet_of_storms',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -演奏时使天气开始循环").gray()])
})

event.addAdvanced('terramity:music_sheet_of_time',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -使世界时间增加12小时（提高效果等级的增益会增加小时数）").gray()])
})

event.addAdvanced('terramity:music_sheet_of_the_gnome_king',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续120s的").gray(),Text.of("急迫II").yellow()])
})

event.addAdvanced('terramity:music_sheet_of_the_legendary_super_sniffer',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续30s的").gray(),Text.of("兴奋").yellow()])
})

event.addAdvanced('terramity:music_sheet_of_the_trial_guardian',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -获得持续30s的").gray(),Text.of("抗性提升I").aqua(),Text.of("和").gray(),Text.of("虚弱I").darkGray()])
})

event.addAdvanced('terramity:music_sheet_of_the_shadow_wizards',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用权之笛演奏来获得Buff").gray()])
    text.add(2,[Text.of(" -向周围生物施加持续5s的").gray(),Text.of("中咒").red()])
})
})

//杂项翻译
ItemEvents.tooltip(event=>{
event.addAdvanced("terramity:slot_machine",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gray("每个老虎机各自拥有其中奖率和回报率"))
        text.add(2,Text.gray("越高的中奖率通常意味着越低的回报率"))
        text.add(3,Text.gray("将物品放至副手右击"))
        text.remove(4)
        text.remove(4)
    }

})

event.addAdvanced("terramity:black_matter",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.aqua("蕴藏着？？？的能量"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced("terramity:plumbers_wrench",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,Text.green("用来绑定传送管"))
        text.add(2,Text.green(""))
        text.add(3,Text.yellow(" -潜行并右击一个传送管使其与此扳手绑定"))
        text.add(4,Text.yellow(" -对着非传送管方块右击以解除绑定"))
        text.add(5,Text.yellow(" -对着另一个传送管右击使其与绑定在此扳手的传送管绑定"))
        text.add(6,Text.green(""))
    }
    
})

event.addAdvanced("terramity:debug_wrench",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.remove(1)
        text.remove(1)
        text.add(1,Text.lightPurple("创造模式专属"))
        text.add(3,Text.yellow(" -右击传送管以检查其绑定至何处"))
        text.add(4,Text.blue(""))
    }
    
})

event.addAdvanced("terramity:warp_pipe",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.green("[无法单向绑定]"))
        text.add(2,Text.yellow(" -最大绑定距离：64格"))
    }
    
})

event.addAdvanced("terramity:blue_warp_pipe",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.green("[可以单向绑定]"))
        text.add(2,Text.yellow(" -最大绑定距离：32格"))
    }
    
})

event.addAdvanced("terramity:red_warp_pipe",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.green("[无法单向绑定]"))
        text.add(2,Text.yellow(" -最大绑定距离：256格"))
    }
    
})

event.addAdvanced("terramity:yellow_warp_pipe",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.green("[可以单向绑定]"))
        text.add(2,Text.yellow(" -最大绑定距离：128格"))
    }
    
})

event.addAdvanced("terramity:white_warp_pipe",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.green("[可以作为任何黑色传送管的出口]"))
        text.add(2,Text.yellow(" -最大绑定距离：512格"))
    }
    
})

event.addAdvanced("terramity:black_warp_pipe",(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.green("[只能绑定至白色传送管]"))
        text.add(2,Text.yellow(" -最大绑定距离：512格"))
    }
    
})

event.addAdvanced('terramity:chthonian_void',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gray("向内一瞥，无尽的灵魂被施以永生诅咒"))
        text.add(2,Text.gray("（方块）"))
        text.add(3,Text.blue(""))
    }
    
})

event.addAdvanced('terramity:pink_fairy_bottle',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.aqua("无需手持即可在死亡时以六颗心的生命值复活"))
        text.add(2,Text.gray("背包最多装入两个，多余的仙灵之瓶在复活时将被耗尽"))
        text.add(3,Text.blue(""))
    }
    
})

event.addAdvanced('terramity:green_fairy_bottle',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用以获得").gray(),Text.of("跳跃提升II").green()])
})

event.addAdvanced('terramity:blue_fairy_bottle',(item,advanced,text)=>{
    text.remove(1)
    text.remove(1)
    text.add(1,[Text.of(" -使用以获得").gray(),Text.of("速度II").blue()])
})

event.addAdvanced('terramity:pink_fairy_jar',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,[Text.of(" -发出光芒并使玩家获得").gray(),Text.of("生命恢复I").lightPurple()])
})

event.addAdvanced('terramity:green_fairy_jar',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,[Text.of(" -发出光芒并使玩家获得").gray(),Text.of("跳跃提升II").green()])
})

event.addAdvanced('terramity:blue_fairy_jar',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,[Text.of(" -发出光芒并使玩家获得").gray(),Text.of("速度II").blue()])
})

event.addAdvanced('terramity:moondrill_cannon',(item,advanced,text)=>{
    text.add(2,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.remove(1)
        text.add(1,[Text.of("他们说月亮上能找到稀有的宝石……").blue()])
        text.add(2,Text.blue(""))
        text.add(3,Text.gray("在其下放置电池充能并使用红石信号激活"))
        text.add(4,Text.blue(""))

    }
    
})

event.addAdvanced('terramity:guardian_grimoire',(item,advanced,text)=>{
        text.remove(1)
        text.remove(1)
        text.add(1,[Text.of("发射一个射出激光并旋转的试炼守护者的手").gray()])
        text.add(2,Text.gray("激光也能伤害使用者，使用时请小心"))
        text.add(3,Text.blue(""))

})

event.addAdvanced('terramity:warp_whistle',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("右击时："))
        text.add(2,Text.yellow(" -完整演奏曲子后，你将被传送至重生点"))
        text.add(3,Text.yellow(" -留下一个持续15秒的传送龙卷风在原地，任何踏入其中的实体也将被传送至你的重生点"))
        text.add(4,Text.yellow(""))
    }
    
})

event.addAdvanced('terramity:ocarina_of_power',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gold("右击时："))
        text.add(2,Text.yellow(" -完整演奏曲子后，获得相应效果"))
        text.add(3,Text.gold("潜行+右击："))
        text.add(4,Text.yellow(" -打开GUI"))
        text.add(5,Text.yellow(""))
    }
    
})

event.addAdvanced('terramity:chronoseraph_clock',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.lightPurple("创造模式专属（实验性物品）"))
        text.add(2,Text.blue(""))
        text.add(3,Text.gold("右击时："))
        text.add(4,Text.yellow(" -消耗15级经验以使昼夜反转"))
        text.add(5,Text.blue(""))
        text.remove(6)
    }
    
})

event.addAdvanced('terramity:blood_contract',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.lightPurple("多人游戏专属"))
        text.add(2,Text.gray("处于背包时，使签署契约者无法对你造成伤害"))
        text.add(3,Text.blue(""))
        text.remove(4)
    }
    
})

event.addAdvanced('terramity:battery',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gray("置于尖刺或月钻炮之下为其充能"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:ruby',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.aqua("蕴藏着火的能量"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:sapphire',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.aqua("蕴藏着雪的能量"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:topaz',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.aqua("蕴藏着风的能量"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:iridescent_shard',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.aqua("蕴藏着光的能量"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:daemonium',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.aqua("蕴藏着恶魔的能量"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:onyx',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.aqua("蕴藏着黑暗的能量"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:profanum',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    
    if (event.shift){
        text.remove(1)
        text.add(1,Text.yellow("它是如此炽热以至于即使放在背包中也能使你着火"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:perish_staff',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.gray("风化基岩，使其可被挖掘"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:void_glass',(item,advanced,text)=>{
    text.add(1,Text.gold("按住 [Shift] 开始思索"))
    if (event.shift){
        text.remove(1)
        text.add(1,Text.aqua("允许视线透视方块以寻找地下的结构"))
        text.add(2,Text.blue(""))
        text.remove(3)
    }
    
})

event.addAdvanced('terramity:gunsmith_station',(item,advanced,text)=>{
    text.add(1,Text.gray("村民的工作方块"))
})

event.addAdvanced('terramity:offering_pedestal',(item,advanced,text)=>{
    text.add(1,Text.gray("手持神秘面纱右击以召唤BOSS"))
})

event.addAdvanced('terramity:golden_gnome_statue',(item,advanced,text)=>{
    text.add(1,Text.gray("手持红色地精帽子右击以召唤BOSS"))
})

event.addAdvanced('terramity:guardians_padlock',(item,advanced,text)=>{
    text.add(1,Text.gray("手持尖塔钥匙右击以召唤BOSS"))
})

event.addAdvanced('terramity:occult_fabric',(item,advanced,text)=>{
    text.add(1,Text.gray("手持右击供奉祭坛以召唤BOSS"))
    text.add(2,Text.gray("供奉祭坛可以在下界基岩层上的幽冥教堂中找到"))
})

event.addAdvanced('terramity:red_gnome_hat_helmet',(item,advanced,text)=>{
    text.add(1,Text.gray("手持右击金质地精雕像以召唤BOSS"))
    text.add(2,Text.gray("金质地精雕像可以在沼泽或黑森林中的地精王宫中找到"))
})

event.addAdvanced('terramity:spire_key',(item,advanced,text)=>{
    text.add(1,Text.gray("手持右击试炼守护者的挂锁以召唤BOSS"))
    text.add(2,Text.gray("试炼守护者的挂锁可以在海洋中的试炼尖塔地下一层找到"))
})

event.addAdvanced('terramity:dimlite_upgrade_smithing_template',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.gray("幽邃升级"))
    text.remove(3)
    text.add(3,Text.gray("应用于："))
    text.remove(4)
    text.add(4,Text.blue("下界合金装备"))
    text.remove(5)
    text.add(5,Text.gray("所需原材料："))
    text.remove(6)
    text.add(6,Text.blue("幽邃锭"))  
})

event.addAdvanced('terramity:virentium_upgrade_smithing_template',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.gray("维伦合金升级"))
    text.remove(3)
    text.add(3,Text.gray("应用于："))
    text.remove(4)
    text.add(4,Text.blue("下界合金装备"))
    text.remove(5)
    text.add(5,Text.gray("所需原材料："))
    text.remove(6)
    text.add(6,Text.blue("维伦合金"))  
})

event.addAdvanced('terramity:cosmilite_upgrade_smithing_template',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.gray("寰宇升级"))
    text.remove(3)
    text.add(3,Text.gray("应用于："))
    text.remove(4)
    text.add(4,Text.blue("下界合金装备"))
    text.remove(5)
    text.add(5,Text.gray("所需原材料："))
    text.remove(6)
    text.add(6,Text.blue("寰宇锭"))  
})

event.addAdvanced('terramity:void_upgrade_smithing_template',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.gray("虚空合金升级"))
    text.remove(3)
    text.add(3,Text.gray("应用于："))
    text.remove(4)
    text.add(4,Text.blue("铱装备"))
    text.remove(5)
    text.add(5,Text.gray("所需原材料："))
    text.remove(6)
    text.add(6,Text.blue("虚空合金"))  
})

event.addAdvanced('terramity:conductite_upgrade_smithing_template',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.gray("聚电升级"))
    text.remove(3)
    text.add(3,Text.gray("应用于："))
    text.remove(4)
    text.add(4,Text.blue("铱装备"))
    text.remove(5)
    text.add(5,Text.gray("所需原材料："))
    text.remove(6)
    text.add(6,Text.blue("聚电锭"))  
})

event.addAdvanced('terramity:hellspec_upgrade_smithing_template',(item,advanced,text)=>{
    text.remove(1)
    text.add(1,Text.gray("地狱合金升级"))
    text.remove(3)
    text.add(3,Text.gray("应用于："))
    text.remove(4)
    text.add(4,Text.blue("铱装备"))
    text.remove(5)
    text.add(5,Text.gray("所需原材料："))
    text.remove(6)
    text.add(6,Text.blue("地狱合金"))  
})
})
