input.onButtonPressed(Button.A, function () {
    basic.pause(2000)
    Drones.Basic_action(Drones.Basicoptions.Takeoff)
    Drones.Move_action(Drones.Directionoptions.Forward, 100)
    Drones.Move_action(Drones.Directionoptions.Right, 100)
    Drones.Move_action(Drones.Directionoptions.Backward, 100)
    Drones.Move_action(Drones.Directionoptions.Left, 100)
    Drones.Basic_action(Drones.Basicoptions.Landing)
})
basic.showIcon(IconNames.Heart)
Drones.initModule(Drones.Runmodes.Master)
