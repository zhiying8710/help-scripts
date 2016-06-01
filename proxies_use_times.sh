#!/bin/bash  
# get logfilepath, $0 is sh-self
if [ $1 ]; then
	rm -f /usr/local/tomcat-6.0.41/tomcat_1234/r
	rm -f /usr/local/tomcat-6.0.41/tomcat_1234/a
	cat $1 |grep ' use proxy ' > /usr/local/tomcat-6.0.41/tomcat_1234/a
	cat /usr/local/tomcat-6.0.41/tomcat_1234/a | while read line
	do
	    # split line, -F ' ' means use spaceword to split, $NF means last element.
	    p=`echo $line|awk -F ' ' '{print $NF}'`
	    echo $p >> /usr/local/tomcat-6.0.41/tomcat_1234/r
	done
	echo 'proxies use times:'
	# count the same lines
	sort /usr/local/tomcat-6.0.41/tomcat_1234/r |uniq -c
else
	echo 'usage ttt.sh logfilepath'
fi
