#!/bin/bash
cd /usr/src/app
ln -sf /usr/src/node_modules/
echo "Executing Command: $@"
exec $@