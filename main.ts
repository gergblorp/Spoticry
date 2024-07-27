// change / start songs
input.onButtonPressed(Button.A, function () {
    ChangeSong()
})
function ChangeSong () {
    music.stopMelody(MelodyStopOptions.All)
    if (SongValue == 0) {
        SongValue += 1
        music.stopMelody(MelodyStopOptions.All)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
    } else {
        if (SongValue == 1) {
            SongValue += 1
            music.stopMelody(MelodyStopOptions.All)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.LoopingInBackground)
        } else {
            if (SongValue == 2) {
                SongValue += 1
                music.stopMelody(MelodyStopOptions.All)
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
            } else {
                if (SongValue == 3) {
                    SongValue += 1
                    music.stopMelody(MelodyStopOptions.All)
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.LoopingInBackground)
                } else {
                    if (SongValue == 4) {
                        SongValue += 1
                        music.stopMelody(MelodyStopOptions.All)
                        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.LoopingInBackground)
                    } else {
                        if (SongValue == 5) {
                            SongValue += 1
                            music.stopMelody(MelodyStopOptions.All)
                            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
                        } else {
                            SongValue = 0
                            music.stopMelody(MelodyStopOptions.All)
                        }
                    }
                }
            }
        }
    }
}
// Remote Control
radio.onReceivedString(function (receivedString) {
    if (receivedString == "B") {
        music.stopMelody(MelodyStopOptions.All)
        SongValue = 0
    } else {
        ChangeSong()
    }
})
// Stop Songs
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
    SongValue = 0
})
let SongValue = 0
// Remote Control Group
radio.setGroup(21)
SongValue = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
basic.showString("Spoticry")
basic.showIcon(IconNames.EighthNote)
