local robot = require("robot")
local component = require("component")
local inventory = component.inventory_controller
local sides = require("sides")
local maxSlot = 8

function start()
robot.swing()
durab()
end

function checktool()
if robot.durability() == nil then
fastunload()
print("Нету артаны")
robot.turnRight()
robot.use()
robot.turnLeft()
inventory.equip()
end
end


function fastunload()
print("Разгрузка")
robot.turnLeft()
for i = 1, maxSlot do
    robot.select(i)
    inventory.dropIntoSlot(sides.front, 1)
os.sleep(0.5)
end
robot.turnRight()
robot.select(1)
end
function durab()
if robot.durability() < 0.6 then
fastunload()
print("Чиним артану")
robot.turnRight()
robot.use()
robot.turnLeft()
inventory.equip()
end
end


checktool()
while true do
start()
end


