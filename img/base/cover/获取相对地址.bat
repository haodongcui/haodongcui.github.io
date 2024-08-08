@echo off
setlocal enabledelayedexpansion

REM 获取当前目录的相对路径前缀
for %%I in (.) do set "base_dir=%%~dpI"
set "base_dir=%base_dir:~0,-1%" REM 去掉最后的反斜杠

REM 相对路径前缀
set "relative_base_path=/img/base/cover"

REM 输出文件路径
set "output_file=output.txt"

REM 初始化输出文件
> "%output_file%" echo.

REM 遍历当前目录下的所有文件
for %%f in (*) do (
    REM 获取文件的相对路径
    set "file=%%~f"

    REM 将反斜杠替换为斜杠
    set "file=!file:\=/!"

    REM 将文件路径前加上相对路径前缀
    echo     - %relative_base_path%/!file!>> "%output_file%"
)

echo Done! The file paths have been saved to %output_file%.

