import { TreeSelect } from 'antd';
import { DataNode } from 'antd/lib/tree';
import { TreeNode } from 'antd/lib/tree-select';
import _ from 'lodash';
import React, { FC, useMemo, useState } from 'react';

const myData = {
  "complex": null,
  "type": {
    "name": "Управленческая кадровая структура",
    "id": 6
  },
  "objects": {
    "staffStructureId": 2,
    "parentId": null,
    "organization": null,
    "subdivision": null,
    "position": null,
    "chief": null,
    "children": [
      {
        "staffStructureId": 2,
        "parentId": 42,
        "organization": null,
        "subdivision": null,
        "position": null,
        "chief": null,
        "children": [
          {
            "staffStructureId": 2,
            "parentId": 60,
            "organization": {
              "name": "Департамент финансового обеспечения",
              "fullName": "Департамент финансового обеспечения",
              "inn": "7707695409",
              "kpp": "770701001",
              "parent": null,
              "chief": null,
              "id": 45
            },
            "subdivision": null,
            "position": {
              "name": "начальник Главного управления",
              "fullName": "начальник Главного управления",
              "isStatePosition": true,
              "id": 12
            },
            "chief": null,
            "children": [
              {
                "staffStructureId": 2,
                "parentId": 50,
                "organization": null,
                "subdivision": {
                  "name": "Руководство",
                  "parentId": null,
                  "organization": {
                    "name": "Департамент финансового обеспечения",
                    "fullName": "Департамент финансового обеспечения",
                    "inn": "7707695409",
                    "kpp": "770701001",
                    "parent": null,
                    "chief": null,
                    "id": 45
                  },
                  "managerialSubdivision": false,
                  "id": 16
                },
                "position": {
                  "name": "начальник Главного управления",
                  "fullName": "начальник Главного управления",
                  "isStatePosition": true,
                  "id": 12
                },
                "chief": {
                  "id": 1547,
                  "firstName": "Антонина",
                  "lastName": "Абаринова",
                  "patronymic": "Ивановна",
                  "gender": "Female",
                  "photos": []
                },
                "children": [
                  {
                    "staffStructureId": 2,
                    "parentId": 43,
                    "organization": null,
                    "subdivision": {
                      "name": "Финансовый отдел",
                      "parentId": 16,
                      "organization": {
                        "name": "Департамент финансового обеспечения",
                        "fullName": "Департамент финансового обеспечения",
                        "inn": "7707695409",
                        "kpp": "770701001",
                        "parent": null,
                        "chief": null,
                        "id": 45
                      },
                      "managerialSubdivision": true,
                      "id": 33
                    },
                    "position": {
                      "name": "начальник отдела",
                      "fullName": "начальник отдела",
                      "isStatePosition": true,
                      "id": 2
                    },
                    "chief": null,
                    "children": [
                      {
                        "staffStructureId": 2,
                        "parentId": 44,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "Финансист",
                          "fullName": "Финансист",
                          "isStatePosition": false,
                          "id": 20
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 1",
                        "id": 45
                      },
                      {
                        "staffStructureId": 2,
                        "parentId": 44,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "Ведущий методист",
                          "fullName": "Ведущий методист",
                          "isStatePosition": false,
                          "id": 19
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 2",
                        "id": 46
                      },
                      {
                        "staffStructureId": 2,
                        "parentId": 44,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "Финансист",
                          "fullName": "Финансист",
                          "isStatePosition": false,
                          "id": 20
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 3",
                        "id": 47
                      },
                      {
                        "staffStructureId": 2,
                        "parentId": 44,
                        "organization": null,
                        "subdivision": {
                          "name": "Отдел системной аналитики",
                          "parentId": null,
                          "organization": {
                            "name": "Департамент финансового обеспечения",
                            "fullName": "Департамент финансового обеспечения",
                            "inn": "7707695409",
                            "kpp": "770701001",
                            "parent": null,
                            "chief": null,
                            "id": 45
                          },
                          "managerialSubdivision": false,
                          "id": 2
                        },
                        "position": {
                          "name": "начальник отдела",
                          "fullName": "начальник отдела",
                          "isStatePosition": true,
                          "id": 2
                        },
                        "chief": {
                          "id": 1547,
                          "firstName": "Антонина",
                          "lastName": "Абаринова",
                          "patronymic": "Ивановна",
                          "gender": "Female",
                          "photos": []
                        },
                        "children": [
                          {
                            "staffStructureId": 2,
                            "parentId": 48,
                            "organization": null,
                            "subdivision": null,
                            "position": {
                              "name": "Ведущий аналитик",
                              "fullName": "Ведущий аналитик",
                              "isStatePosition": false,
                              "id": 21
                            },
                            "chief": null,
                            "children": [],
                            "name": "Позиция 1",
                            "id": 49
                          }
                        ],
                        "name": "Отдел системной аналитики",
                        "id": 48
                      }
                    ],
                    "name": "Финансовый отдел",
                    "id": 44
                  },
                  {
                    "staffStructureId": 2,
                    "parentId": 43,
                    "organization": null,
                    "subdivision": {
                      "name": "Отдел бухгалтерского учета и расчетов заработной платы",
                      "parentId": null,
                      "organization": {
                        "name": "Департамент финансового обеспечения",
                        "fullName": "Департамент финансового обеспечения",
                        "inn": "7707695409",
                        "kpp": "770701001",
                        "parent": null,
                        "chief": null,
                        "id": 45
                      },
                      "managerialSubdivision": false,
                      "id": 17
                    },
                    "position": {
                      "name": "начальник отдела",
                      "fullName": "начальник отдела",
                      "isStatePosition": true,
                      "id": 2
                    },
                    "chief": {
                      "id": 1547,
                      "firstName": "Антонина",
                      "lastName": "Абаринова",
                      "patronymic": "Ивановна",
                      "gender": "Female",
                      "photos": []
                    },
                    "children": [
                      {
                        "staffStructureId": 2,
                        "parentId": 51,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "ведущий специалист",
                          "fullName": "ведущий специалист",
                          "isStatePosition": true,
                          "id": 6
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 2",
                        "id": 52
                      },
                      {
                        "staffStructureId": 2,
                        "parentId": 51,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "Ведущий методист",
                          "fullName": "Ведущий методист",
                          "isStatePosition": false,
                          "id": 19
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 3",
                        "id": 53
                      },
                      {
                        "staffStructureId": 2,
                        "parentId": 51,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "главный бухгалтер − заместитель начальника отдела в управлении",
                          "fullName": "главный бухгалтер − заместитель начальника отдела в управлении",
                          "isStatePosition": true,
                          "id": 9
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 1",
                        "id": 59
                      }
                    ],
                    "name": "Отдел бухгалтерского учета и расчетов заработной платы",
                    "id": 51
                  },
                  {
                    "staffStructureId": 2,
                    "parentId": 43,
                    "organization": null,
                    "subdivision": {
                      "name": "Отдел организации работ по земельно-имущественным торгам",
                      "parentId": null,
                      "organization": {
                        "name": "Департамент финансового обеспечения",
                        "fullName": "Департамент финансового обеспечения",
                        "inn": "7707695409",
                        "kpp": "770701001",
                        "parent": null,
                        "chief": null,
                        "id": 45
                      },
                      "managerialSubdivision": false,
                      "id": 34
                    },
                    "position": {
                      "name": "начальник самостоятельного отдела",
                      "fullName": "начальник самостоятельного отдела",
                      "isStatePosition": true,
                      "id": 13
                    },
                    "chief": {
                      "id": 1547,
                      "firstName": "Антонина",
                      "lastName": "Абаринова",
                      "patronymic": "Ивановна",
                      "gender": "Female",
                      "photos": []
                    },
                    "children": [
                      {
                        "staffStructureId": 2,
                        "parentId": 54,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "ведущий специалист",
                          "fullName": "ведущий специалист",
                          "isStatePosition": true,
                          "id": 6
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 1",
                        "id": 55
                      },
                      {
                        "staffStructureId": 2,
                        "parentId": 54,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "ведущий специалист",
                          "fullName": "ведущий специалист",
                          "isStatePosition": true,
                          "id": 6
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 2",
                        "id": 56
                      },
                      {
                        "staffStructureId": 2,
                        "parentId": 54,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "ведущий специалист",
                          "fullName": "ведущий специалист",
                          "isStatePosition": true,
                          "id": 6
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 3",
                        "id": 57
                      },
                      {
                        "staffStructureId": 2,
                        "parentId": 54,
                        "organization": null,
                        "subdivision": null,
                        "position": {
                          "name": "инспектор",
                          "fullName": "инспектор",
                          "isStatePosition": true,
                          "id": 11
                        },
                        "chief": null,
                        "children": [],
                        "name": "Позиция 4",
                        "id": 58
                      }
                    ],
                    "name": "Отдел организации работ по земельно-имущественным торгам",
                    "id": 54
                  }
                ],
                "name": "Руководство",
                "id": 43
              }
            ],
            "name": "Департамент финансового обеспечения ",
            "id": 50
          }
        ],
        "name": "Управленка департамент финансового обеспечения",
        "id": 60
      }
    ],
    "name": "Управленка департамент финансового обеспечения",
    "id": 42
  },
  "name": "123",
  "fullName": "Управленка департамент финансового обеспечения",
  "id": 2
}

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    isLeaf: true,
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        children:[
          {
            title: 'Child Node1',
            value: '0-0-0-1',
          },
          {
            title: 'Current Child Node',
            value: '0-0-0-2',
          }
        ]
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

export const SelectTree: FC = () => {

  const [value, setValue] = useState(undefined)

  const onChange = (value: any) => {
    console.log(value);
    setValue(value.isLeaf);
  };

  // console.log('select tree', myData);
  const newArr: any = []


  const handleChangeTree = useMemo(
    () => (tree: any): any => {
        return tree.map((item: any) => {


          newArr.push({
            id: item?.position?.id,
            name: item?.position?.name
          })

          return {
            ...item,
            key: item.id,
            title: item.name,
            value: item.id,
            data: item,
            children: item.children?.length
                ? handleChangeTree(item.children)
                : [],
            }

      })
    },
    []
)

// for(let item in myArr){
//   console.log('item', item);
// }

// newArr.forEach(function(value: any) {
//   console.log(value)
// })



// for (let item of newArr.values()) console.log();
const objectsTree: DataNode[] | undefined = myData?.objects
    ? handleChangeTree([myData.objects])
    : undefined

    console.log('newArr ===>', newArr)

    const clearArr: any = []

    // let duplicatesArr = _.difference(newArr, _.uniqBy(newArr, 'id'), 'id')

    let unicObject: any[] = [];

    newArr.forEach((item: any) => {
      if(!unicObject.find((unic) => unic.id === item.id)){
         unicObject.push(item);
      }
    });

    console.log('UNIQ ===>', unicObject)
    console.log('clearArr ===>', clearArr)
    console.log('duplicatesArr ===>', _.uniqBy(newArr, 'id'))
  return (
      <section>
        <h1>Select tree</h1>
        <div className="selecttree">
          <TreeSelect
            defaultValue={{
                        title: 'Current Child Node',
                        value: '0-0-0-2',
                      }}
            style={{ width: '100%' }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            treeData={treeData}
            placeholder="Выберите"
            treeDefaultExpandAll
            onChange={onChange}
          />
        </div>
      </section>
  )
}
