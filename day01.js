var input = "1753\n1858\n1860\n1978\n1758\n1847\n2010\n1679\n1222\n1723\n1592\n1992\n1865\n1635\n1692\n1653\n1485\n848\n1301\n1818\n1872\n1883\n1464\n2002\n1736\n1821\n1851\n1299\n1627\n1698\n1713\n1676\n1673\n1448\n1939\n1506\n1896\n1710\n1677\n1894\n1645\n1454\n1972\n1687\n265\n1923\n1666\n1761\n1386\n2006\n1463\n1759\n1460\n1722\n1670\n1731\n1732\n1976\n1564\n1380\n1981\n1998\n1912\n1479\n1500\n167\n1904\n1689\n1810\n1675\n1811\n1671\n1535\n1624\n1638\n1848\n1646\n1795\n1717\n1803\n1867\n1794\n1774\n1245\n1915\n1601\n1656\n1472\n1700\n1887\n1869\n1876\n1561\n1743\n1900\n1574\n1400\n1950\n1893\n1576\n1903\n1747\n1560\n1445\n1652\n633\n1970\n1812\n1807\n1788\n1948\n1588\n1639\n1719\n1680\n1773\n1890\n1347\n1344\n1456\n1691\n1842\n1585\n1953\n410\n1791\n485\n1412\n1994\n1799\n1955\n1554\n1661\n1708\n1824\n1553\n1993\n1911\n1515\n1545\n856\n1685\n1982\n1954\n1480\n1709\n1428\n1829\n1606\n1613\n1941\n1483\n1513\n1664\n1801\n1720\n1984\n1575\n1805\n1833\n1418\n1882\n1746\n483\n1674\n1467\n1453\n523\n1414\n1800\n1403\n1946\n1868\n1520\n1861\n1580\n1995\n1960\n1625\n1411\n1558\n1817\n1854\n1617\n1478\n735\n1593\n1778\n1809\n1584\n1438\n1845\n1712\n1655\n1990\n1578\n1703\n1895\n1765\n1572";
var nums = input.split('\n');
var requiredSum = 2020;
nums.forEach(function (numFirst) {
    nums.forEach(function (numSecond) {
        var result = parseInt(numFirst) + parseInt(numSecond);
        if (result === requiredSum) {
            console.log({ numFirst: numFirst, numSecond: numSecond, finalSolution: parseInt(numFirst) * parseInt(numSecond) });
        }
        nums.forEach(function (thirdNum) {
            var result = parseInt(numFirst) + parseInt(numSecond) + parseInt(thirdNum);
            if (result === requiredSum) {
                console.log({ numFirst: numFirst, numSecond: numSecond, thirdNum: thirdNum, finalSolution: parseInt(numFirst) * parseInt(numSecond) * parseInt(thirdNum) });
            }
        });
    });
});
