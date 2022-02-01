# Panel Twitch Chat

A simple web-based twitch chat viewer as a panel for use in Microsoft Flight Simulator. This is meant to make it easier to view a twitch stream's chat while flying. It is especially designed for VR users who stream and want to keep an eye on their chat, but it can also be used for streamers without multiple monitors.

## Acknowledgements

Forked from https://github.com/diagonalization-lab/msfs-panel-notepad which in turn was based on https://github.com/bymaximus/msfs2020-toolbar-window-template. 

Tmi.js code from https://codepen.io/gylidian/pen/NWWzGGg with some modifications here and there.

## Tested with

- SDK version: 0.16.0.0 
- MSFS version: 1.21.18.0 (Sim Update 7 and World Update 7)

## Installation

Download the latest release .zip file and extract it to your *Community* folder. 

## Configuration

Navigate into the *Community* folder\panel-twitch\html_ui\InGamePanels\TwitchChatPanel and edit TwitchChatPanel.js

Near the top of the file, set the channel name you want to connect to and the number of message lines to display.

## Build from Source (not necessary to use)

You will need the MSFS SDK. Download from in-game: Options > General Options > Developers > Developer Mode: ON, then access the DevMode toolbar > Help > SDK Installer (Core)

1. Run `build.bat`. 

This builds the package and drops the package folder into .\Packages\panel-twitch. This is the folder that needs to be copied into the *Community* folder.
Optionally, run `build.bat /c` to have the output package automatically copied to the *Community* folder for the Microsoft Store version of MSFS.