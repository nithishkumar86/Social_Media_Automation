Get-CimInstance Win32_Process -Filter "Name='bun.exe'" | ForEach-Object {
  Write-Output ("PID {0}" -f $_.ProcessId)
  Write-Output ("  CMD: {0}" -f $_.CommandLine)
  Write-Output ("  PPID: {0}" -f $_.ParentProcessId)
  Write-Output "---"
}
