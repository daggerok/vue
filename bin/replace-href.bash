#!/bin/bash
sed -i -e "s/\(<base href=\"\/\">\)/<base href=\"\/vue-example\/\"\/>/g" $1
