#!/bin/sh

serv="/home/blac/adacraft-server"

# mcommand="java -Xms1G -Xmx1G \
#       -Dcom.mojang.eula.agree=true \
#       -jar $serv/spigot.jar \
#      --bukkit-settings $serv/bukkit.yml \
#      --commands-settings $serv/commands.yml \
#      --config $serv/server.properties \
#      --plugins $serv/plugins/ \
#      --spigot-settings $serv/spigot.yml \
#      --world-dir $serv/"


java -Xms1G -Xmx1G -jar spigot.jar
