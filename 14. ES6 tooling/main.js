import {kebabCase, sum} from 'npm:lodash'
import {addTax} from './checkout'

console.log(kebabCase('Wes realy is cool'))

console.log(addTax(100, 0.23))
