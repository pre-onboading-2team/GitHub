import React, {useEffect, useState} from "react";
import {AxiosError} from "axios";
import {Link, useNavigate} from "react-router-dom";
import {IssueService} from "../../../services";
import {ROUTER} from "../../../router/routes";
import useIssueContext from "../../../hooks/useIssueContext";

export default function IssueList(){
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false);
    // @ts-ignore
    const {listIssue, setListIssue} = useIssueContext();

    useEffect(() => {
        getListIssue();
    }, []);

    const getListIssue = async () => {
        try {
            setLoading(true);
            const response = await IssueService.getListIssue();
            if (response.status === 200) {
                console.info(response.data);
                // const newDataArr = response.data.map((obj: any) => ({
                //     date: obj.created_at.split("T")[0],
                //     title: obj.title,
                //     user: obj.user.login,
                //     number: obj.number,
                //     comments: obj.comments,
                //     id: obj.id,
                // }));
                // setListIssue((prev: any) => [...prev, ...newDataArr]);
                setListIssue(response.data);    //Todo: open인 것만 근데 ,, closed된건 url자체가 달라서 안불러오는데 .... 필요한가 ,,,
            }
        }catch (error){
            const errorResponse: any = (error as AxiosError).response;
        }finally {
            setLoading(false);
        }
    }

    // const goIssueDetail = (id: number) =>{
    //     console.info("id:  ", id);
    // }

    return(
        <div>
            {listIssue.map((row: any) => (
                <div style={styled.issueZone}>
                    <div>
                        <Link to={`/${row.number}`}><h4>{`#${row.number} ${row.title}`}</h4></Link>
                        <p>
                            <span>{`작성자: ${row.user.login}`}, </span>
                            <span>{`작성일: ${row.created_at}`}</span>
                        </p>
                    </div>
                    <div style={styled.comment}>{`코멘트: ${row.comments}`}</div>
                </div>
            ))}
        </div>
    );
}

const styled = {
    issueZone: {
        backgroundColor: 'gray',
        display: 'flex',
        borderBottom: 'solid',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    comment: {
        padding: 40,
    }
}
