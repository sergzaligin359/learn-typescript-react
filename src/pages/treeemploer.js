import { DownOutlined, GiftOutlined, ReadOutlined } from '@ant-design/icons'
import { Tree } from 'antd'
import { CustomDataNode } from 'pages/Structure/Structure.model'
import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_NAMES } from 'routing'
import { AvatarGender } from 'shared/components/AvatarGender'
import { getShortFio } from 'shared/utils'

export const TreeSel: React.FC<any> = React.memo(
    ({ objectsTree, initialValue }) => {
        console.log('initialValue', initialValue)
        return (
            <div className="structure-page__staff-page staff-page">
                <Tree
                    defaultSelectedKeys={initialValue}
                    className="staff-page__staff-structure-tree"
                    treeData={objectsTree}
                    switcherIcon={<DownOutlined className="tree-icon" />}
                    // defaultExpandAll
                    blockNode
                    selectable={false}
                    titleRender={(data: CustomDataNode) => (
                        <Link
                            to={
                                data.data?.chief
                                    ? `${ROUTE_NAMES.PROFILE}/${data.data.chief.id}`
                                    : ROUTE_NAMES.STRUCTURE
                            }>
                            <div className="tree-item">
                                <AvatarGender
                                    className="tree-avatar"
                                    size={50}
                                />
                                <div>
                                    <p className="tree-item__text">
                                        {data.data?.name}
                                    </p>
                                    <p className={data.data?.position?.name === initialValue?.name ? "tree-item__text ACTIVE" : 'tree-item__text NOACTIVE'}>
                                        {data.data?.position?.name}
                                    </p>
                                    <div className="tree-item__name-wrap">
                                        {data.data?.chief && (
                                            <p className="tree-item__name">
                                                {getShortFio(data.data?.chief)}
                                            </p>
                                        )}
                                        <div className="tree-item__icons">
                                            <span className="tree-item__icon">
                                                <GiftOutlined /> 456
                                            </span>
                                            <span className="tree-item__icon">
                                                <ReadOutlined /> 33
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                />
            </div>
        )
    }
)
<TreeSel objectsTree={objectsTree} initialValue={candidate.vacancy} />

const handleChangeTree = useMemo(
    () => (tree: StaffStructureObjectDto[]): CustomDataNode[] => {
        return tree.map((item) => ({
            ...item,
            key: item.id,
            title: item.name,
            data: item,
            children: item.children?.length
                ? handleChangeTree(item.children)
                : [],
        }))
    },
    []
)

const objectsTree: DataNode[] | undefined = staffStructure?.objects
    ? handleChangeTree([staffStructure.objects])
    : undefined
