function playDrums () {
    for (let index = 0; index < 4; index++) {
        basic.pause(50)
        servos.P0.setAngle(180)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(50)
        // position where it touches the drum
        servos.P0.setAngle(98)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Chessboard)
        basic.pause(25)
        // position where it touches the drum
        servos.P0.setAngle(180)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(25)
        // position where it touches the drum
        servos.P0.setAngle(98)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Chessboard)
        basic.pause(25)
        servos.P0.setAngle(180)
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        // position where it touches the drum
        servos.P0.setAngle(98)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 523, 1, 221, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    }
    music.stopAllSounds()
    basic.showIcon(IconNames.Happy)
}
input.onButtonPressed(Button.A, function () {
    playDrums()
})
basic.showIcon(IconNames.Heart)
