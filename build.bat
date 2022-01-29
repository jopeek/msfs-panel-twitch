@ECHO OFF
"%MSFS_SDK%\Tools\bin\fspackagetool.exe" package.xml
IF "%1"=="/c" GOTO Copy
GOTO Exit
:Copy
xcopy /I /E /Y .\Packages\panel-twitch "%USERPROFILE%\AppData\Local\Packages\Microsoft.FlightSimulator_8wekyb3d8bbwe\LocalCache\Packages\Community\panel-twitch"
:Exit