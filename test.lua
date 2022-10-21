local robot = require("robot")
local component = require("component")
local inv = component.inventory_controller
local sides = require("sides")
local maxSlot = 8

function start()
    robot.swing()
    durab()
end

function checktool()
    if robot.durability() == nil then
        print("Нету артаны")
        robot.turnRight()
        robot.use()
        robot.turnLeft()
        inv.equip()
    end
end  

function durab()  
    if robot.durability() < 0.6 then 
        print("Чиним артану")
        robot.turnRight()
        robot.use()
        os.sleep(6)
        robot.use()
        robot.turnLeft()
        inv.equip()
    end
end

checktool()

while true do start() end



function fastunload()  
    print("Разгрузка")
    robot.turnLeft()
    for i = 1, maxSlot do robot.select(i)
        inv.dropIntoSlot(sides.front,1)
        os.sleep(6)
    end
    robot.turnRight()
    robot.select(1)
end