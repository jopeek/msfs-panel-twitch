@ECHO OFF
rmdir /S /Q .\Packages
"%MSFS_SDK%\Tools\bin\fspackagetool.exe" package.xml
IF "%1"=="/c" GOTO Copy
GOTO Exit
:Copy
xcopy /I /E /Y .\Packages\panel-twitch "C:\MSFS Community Addons\panel-twitch"
:Exit