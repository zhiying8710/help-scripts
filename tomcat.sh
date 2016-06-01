#!/bin/bash
#
#tomcat This shell script enables the automatic use of report
#
#Author: Robert Wang
#
#chkconfig: 35 70 30
#description: start report
start(){
      /usr/local/tomcat-6.0.41/tomcat_maildata/bin/startup.sh &
}

stop(){
      /usr/local/tomcat-6.0.41/tomcat_maildata/bin/shutdown.sh &

      sleep 3s
      pidinfo=`ps x|grep 'tomcat_maildata/' |awk '{print $1}'`
      #echo $pidinfo
      pids=(${pidinfo//\n/ })
      for i in ${pids[@]}
      do
          kill $i
      done
      echo "done"
}

restart(){
	stop
	start
}

case "$1" in
 start)
       start
       ;;
 stop)
       stop
      ;;
 restart|force-reload)
       restart
      ;;
 reload)
      ;;
 *)
 echo $"Usage: $0 {start|stop|restart}"
      exit 1
      esac
exit 0
